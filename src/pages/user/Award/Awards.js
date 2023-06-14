import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../component/UI/Loading";
import AwardList from "../../../component/Award/AwardList";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { getAwards } from "../../../actions/awardActions";
import {Pagination} from "@mui/material";

const MainContainer = styled(Container)(({ theme }) => ({
    margin: "60px auto",
    display: "flex",
    flexDirection: "column",
}));

const Title = styled("div")(({ theme }) => ({
    ...theme.typography.heading["03"],
}));

const Awards = () => {
    const awardsPerPage = 3; // Number of awards to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const awards = useSelector((state) => state.awards.awards);
    const isLoadingAwards = useSelector((state) => state.awards.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAwards());
    }, [dispatch]);

    // Calculate the index range for the current page
    const indexOfLastAward = currentPage * awardsPerPage;
    const indexOfFirstAward = indexOfLastAward - awardsPerPage;
    const currentAwards = awards.slice(indexOfFirstAward, indexOfLastAward);

    // Change the current page
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    return (
        <MainContainer>
            <Title>Досягнення</Title>
            <Box sx={{ display: "flex", alignItems: "start", flexDirection: "column" }}>
                {isLoadingAwards ? (
                    <Loading />
                ) : (
                    <AwardList displayRandom={false} awards={currentAwards} />
                )}
                <Pagination
                    sx={{marginTop: '24px'}}
                    size={"large"}
                    shape="rounded"
                    count={Math.ceil(awards.length / awardsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    showFirstButton
                    showLastButton
                />
            </Box>
        </MainContainer>
    );
};

export default Awards;
