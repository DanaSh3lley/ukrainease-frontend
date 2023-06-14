import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getLesson, submitAnswer, takeLesson} from "../../../actions/SingleLessonActions";
import CustomStepper from "../../../component/UI/CustomStepper";
import Container from "@mui/material/Container";
import {styled} from "@mui/system";
import {Typography} from "@mui/material";
import Loading from "../../../component/UI/Loading";
import CustomButton from "../../../component/UI/CustomButton";
import Question from "../../../component/Lesson/Question";

const RootContainer = styled(Container)(({theme}) => ({
    margin: "60px auto",
    padding: "16px",
    display: "flex",
    flex: 1
}));

const Title = styled(Typography)(({theme}) => ({
    ...theme.typography.heading["02"],
    display: "flex",
    gap: "8px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "24px"
}));

const StyledBadge = styled("span")(({theme}) => ({
    ...theme.typography.body.tiny["300"],
    backgroundColor: theme.palette.primary["600"],
    color: theme.palette.gray["0"],
    padding: "8px 12px",
    borderRadius: theme.spacing(2)
}));

const QuestionPage = () => {
    const dispatch = useDispatch();
    const {lessonId} = useParams();
    const {
        lesson,
        lessonProgress,
        currentQuestion,
        isLoading,
        takeQuestionIsLoading
    } = useSelector((state) => state.lesson);
    const [userAnswer, setUserAnswer] = useState("");

    useEffect(() => {
        dispatch(takeLesson(lessonId));
    }, [dispatch, lessonId]);
    const handleNextStep = async () => {
        await dispatch(submitAnswer({lessonId, userAnswer}));
    };

    if (isLoading || takeQuestionIsLoading) {
        return <Loading/>;
    }

    return (
        <RootContainer maxWidth="xl">
            <Container sx={{flex: 1}} maxWidth="md">
                <Title component="h1" gutterBottom>
                    {lesson?.name}
                    <StyledBadge>
                        Практика
                    </StyledBadge>
                </Title>
                <Question
                    lessonId={lessonId}
                    answer={userAnswer}
                    lessonProgress={lessonProgress}
                    lesson={lesson}
                    setAnswer={setUserAnswer}
                    question={currentQuestion}
                />
                <CustomButton
                    sx={{marginTop: "16px"}}
                    variant="contained"
                    color="primary"
                    onClick={handleNextStep}
                >
                    Next
                </CustomButton>
            </Container>
            <CustomStepper activeStep={2}/>
        </RootContainer>
    );
};

export default QuestionPage;
