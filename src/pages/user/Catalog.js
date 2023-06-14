import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCatalog} from "../../actions/LessonActions";
import LessonCard from "../../component/UI/LessonCard";
import Grid from "@mui/material/Grid";
import FilterSection from "../../component/UI/FilterSection";
import {Breadcrumbs, FormControl, Link, Pagination, TextField} from "@mui/material";
import {styled} from "@mui/system";
import Container from "@mui/material/Container";
import Loading from "../../component/UI/Loading";
import Typography from "@mui/material/Typography";
import CustomButton from "../../component/UI/CustomButton";
import {Search} from "@mui/icons-material";

const MainContainer = styled(Container)(({theme}) => ({
    margin: '60px auto'
}));
const Title = styled('h2')(({theme}) => ({
    ...theme.typography.heading['02'],
    textAlign: 'center',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: '0',
    marginBottom: '24px'
}));

const Catalog = ({type, title}) => {
    const dispatch = useDispatch();
    const catalog = useSelector((state) => state.lessons.catalog);
    const categories = useSelector((state) => state.lessons.categories);
    const tags = useSelector((state) => state.lessons.tags);
    const isLoading = useSelector((state) => state.lessons.isLoading);
    const total = useSelector((state) => state.lessons.totalPages);
    const [currentPage, setCurrentPage] = useState(1);
    const lessonsPerPage = 9;

    const totalPages = Math.ceil(total / lessonsPerPage);
    const [searchQuery, setSearchQuery] = useState('');
    const [levelFilter, setLevelFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [tagsFilter, setTagsFilter] = useState([]);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const handleApplyFilters = () => {
        setCurrentPage(1)
        dispatch(
            getCatalog({
                page: 1,
                limit: lessonsPerPage,
                lessonType: type,
                level: levelFilter,
                category: categoryFilter,
                tags: tagsFilter,
                search: searchQuery,
            })
        );
    };

    const handleSearch = () => {
        dispatch(
            getCatalog({
                page: currentPage,
                limit: lessonsPerPage,
                lessonType: type,
                level: levelFilter,
                category: categoryFilter,
                tags: tagsFilter,
                search: searchQuery,
            })
        );
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        if (!isLoading) {
            dispatch(
                getCatalog({
                    page: currentPage,
                    limit: lessonsPerPage,
                    lessonType: type,
                    level: levelFilter,
                    category: categoryFilter,
                    tags: tagsFilter,
                    search: searchQuery,
                })
            );
        }
    }, [dispatch, currentPage, lessonsPerPage, type]);

    return (isLoading ? <Loading/> :
            <MainContainer maxWidth="xl">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Головна
                    </Link>
                    <Typography color="primary">{title}</Typography>
                </Breadcrumbs>
                <Grid container sx={{justifyContent: 'center'}}>
                    <Title>{title}</Title>
                    <Grid item sx={{display: 'flex', justifyContent: 'center', margin: '0 auto 20px auto'}}>
                        <FormControl>
                            <TextField sx={{width: '500px'}}
                                label="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search lessons"
                            />
                        </FormControl>
                        <CustomButton onClick={handleSearch} type='ghoast'>
                            <Search fontSize={"medium"}/>
                        </CustomButton>
                    </Grid>
                    <Grid item container spacing={2}>
                        <Grid item xs={3}>
                            <FilterSection
                                levelFilter={levelFilter}
                                setLevelFilter={setLevelFilter}
                                categoryFilter={categoryFilter}
                                setCategoryFilter={setCategoryFilter}
                                tagsFilter={tagsFilter}
                                setTagsFilter={setTagsFilter}
                                categories={categories}
                                tags={tags}
                                applyFilters={handleApplyFilters}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                                {catalog.map((lesson) => (
                                    <Grid item xs={12} sm={6} md={4} key={lesson._id}>
                                        <LessonCard currentPage={currentPage} type={type}
                                                    lessonsPerPage={lessonsPerPage} lesson={lesson}/>
                                    </Grid>
                                ))}
                            </Grid>
                            <Pagination
                                sx={{marginTop: '24px'}}
                                size={"large"}
                                shape="rounded"
                                count={totalPages}
                                page={currentPage}
                                onChange={handlePageChange}
                                color="primary"
                                showFirstButton
                                showLastButton
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </MainContainer>
    );
};

export default Catalog;
