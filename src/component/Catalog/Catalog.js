import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCatalog} from "../../actions/LessonActions";
import LessonCard from "../UI/LessonCard";
import Grid from "@mui/material/Grid";
import FilterSection from "../UI/FilterSection";
import {FormControl, Pagination, TextField} from "@mui/material";

const Catalog = ({ type }) => {
    const dispatch = useDispatch();
    const catalog = useSelector((state) => state.lessons.catalog);
    const categories = useSelector((state) => state.lessons.categories);
    const tags = useSelector((state) => state.lessons.tags);
    const isLoading = useSelector((state) => state.lessons.isLoading);
    const error = useSelector((state) => state.lessons.error);
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
                    search: searchQuery,
                })
            );
        }
    }, [dispatch, currentPage, lessonsPerPage, type]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <Grid ccontainer spacing={2} direction="row" justify="center" alignItems="center">
                <Grid item>
                    <FormControl>
                        <TextField
                            label="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search lessons"
                        />
                    </FormControl>
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
                                <Grid item xs={12} sm={6} md={4} key={lesson.id}>
                                    <LessonCard lesson={lesson} />
                                </Grid>
                            ))}
                        </Grid>
                        <Pagination
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
        </div>
    );
};

export default Catalog;
