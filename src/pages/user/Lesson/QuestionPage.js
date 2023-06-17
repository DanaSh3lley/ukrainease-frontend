import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {submitAnswer, takeLesson} from "../../../actions/singleLessonActions";
import CustomStepper from "../../../component/UI/CustomStepper";
import Container from "@mui/material/Container";
import {styled} from "@mui/system";
import {Popover, Typography} from "@mui/material";
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
        takeQuestionIsLoading,
        error
    } = useSelector((state) => state.lesson);
    const [userAnswer, setUserAnswer] = useState("");

    useEffect(() => {
        dispatch(takeLesson(lessonId));
    }, [dispatch, lessonId]);
    const handleNextStep = async () => {
        await dispatch(submitAnswer({lessonId, userAnswer}));
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                    Далі
                </CustomButton>
                <CustomButton
                    sx={{marginTop: "16px"}}
                    variant="ghoast"
                    color="primary"
                    href={`/theory/${lessonId}`}
                >
                    Назад до теорії
                </CustomButton>
                <CustomButton  sx={{marginTop: "16px"}}
                               variant="ghoast"
                               color="primary"
                               aria-describedby={id} onClick={handleClick}>
                    Підказка
                </CustomButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <div style={{padding:'12px'}}>{currentQuestion?.hint}</div>
                </Popover>
            </Container>
            <CustomStepper activeStep={2}/>
        </RootContainer>
    );
};

export default QuestionPage;
