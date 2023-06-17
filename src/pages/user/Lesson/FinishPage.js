import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {finishLesson} from '../../../actions/singleLessonActions';
import {Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, Typography} from '@mui/material';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/system";
import {Check, X} from "phosphor-react";
import CustomButton from "../../../component/UI/CustomButton";
import CustomStepper from "../../../component/UI/CustomStepper";
import Loading from "../../../component/UI/Loading";

const RootContainer = styled(Container)({
    margin: '0 auto',
    padding: '16px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
});

const Title = styled(Typography)(({theme}) => ({
    ...theme.typography.heading['02'],
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledBadge = styled('span')(({theme}) => ({
    ...theme.typography.body.tiny['300'],
    backgroundColor: theme.palette.primary['600'],
    color: theme.palette.gray['0'],
    padding: '8px 12px',
    borderRadius: theme.spacing(2),
}));

const CustomListItemText = styled('div')(({theme}) => ({
    ...theme.typography.subheading['03'],
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
}))

const ItemContainer = styled(ListItem)(({theme}) => ({
    padding: '12px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
}))

const FinishPage = () => {
    const dispatch = useDispatch();
    const {id: lessonId} = useParams();
    const navigate = useNavigate();
    const {lessonResult, lesson, isLoading} = useSelector((state) => state.lesson);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleQuestionClick = (question) => {
        setSelectedQuestion(question);
    };

    const handleCloseDialog = () => {
        setSelectedQuestion(null);
    };

    const handleNextStep = () => {
        navigate(`/reward/${lessonId}`)
    }

    useEffect(() => {
        dispatch(finishLesson(lessonId));
    }, [dispatch, lessonId]);

    if (isLoading) {
        return <Loading/>;
    }


    return (
        <RootContainer maxWidth={'xl'}>
            <Grid flex={1} maxWidth={'lg'}>
                <Title component="h1" gutterBottom>
                    {lesson?.name} <StyledBadge>Відповіді</StyledBadge>
                </Title>
                <Typography variant="body2">Ви правильно відповіли на <b>{lessonResult?.totalCorrect}</b> питань
                    з <b>{lessonResult?.totalQuestions}</b></Typography>

                <List sx={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                    {lessonResult?.userAnswers.map((answer, index) => (
                        <ItemContainer key={index}>
                            <CustomListItemText>{answer.isCorrect ? <Check size={24} color={'#0f9918'}/> :
                                <X size={24} color={'#e54545'}/>}{answer.question.text}</CustomListItemText>
                            <CustomButton variant="ghoast" color="primary" onClick={() => handleQuestionClick(answer)}>
                                Show Details
                            </CustomButton>
                        </ItemContainer>
                    ))}
                </List>

                <CustomButton onClick={handleNextStep}>Далі</CustomButton>

                <Dialog open={!!selectedQuestion} onClose={handleCloseDialog}>
                    {selectedQuestion && (
                        <>
                            <DialogTitle>{selectedQuestion.question.text}</DialogTitle>
                            <DialogContent>
                                {Array.isArray(selectedQuestion.userAnswer) ? (
                                    <>
                                        <Typography>Ваші відповіді</Typography>
                                        <ul>
                                            {selectedQuestion.userAnswer.map(([option, useCase], optionIndex) => (
                                                <li key={optionIndex}>
                                                    <Typography>{option} - {useCase}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                        <Typography>Правильні відповіді</Typography>
                                        <ul>
                                            {selectedQuestion.question.matchingOptions.map((item, optionIndex) => (
                                                <li key={optionIndex}>
                                                    <Typography>{item.left} - {item.right}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <>
                                        <Typography>Ваша відповідь: {selectedQuestion?.userAnswer}</Typography>
                                        <Typography>Правильна відповідь
                                            відповідь: {selectedQuestion?.question.options.filter(el => el.isCorrect).map(el => el.text).join(', ')}</Typography>
                                    </>
                                )}
                                <Typography>Правильно: {selectedQuestion?.isCorrect ? 'Так' : 'Ні'}</Typography>
                                <Typography>Пояснення: {selectedQuestion.question.explanation}</Typography>
                                <Typography>Підказка: {selectedQuestion.question.hint}</Typography>
                            </DialogContent>
                            <DialogActions>
                                <CustomButton onClick={handleCloseDialog}>Закрити</CustomButton>
                            </DialogActions>
                        </>
                    )
                    }
                </Dialog>
            </Grid>
            <CustomStepper activeStep={3}/>
        </RootContainer>
    )
        ;
};

export default FinishPage;
