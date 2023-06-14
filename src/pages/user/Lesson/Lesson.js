// Lesson.js
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getLesson} from '../../../actions/singleLessonActions';
import {useNavigate, useParams} from 'react-router-dom';
import Container from '@mui/material/Container';
import {styled} from '@mui/system';
import catImage from '../../../assets/hero.svg';
import Loading from '../../../component/UI/Loading';
import CustomButton from '../../../component/UI/CustomButton';

const LessonContainer = styled(Container)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
}));

const LessonContent = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '32px',
}));

const LessonInfo = styled('div')(({theme}) => ({
    textAlign: 'left',
}));

const LessonTitle = styled('h3')(({theme}) => ({
    ...theme.typography.subheading['01'],
    marginTop: '8px',
    marginBottom: '8px',
}));

const LessonDescription = styled('div')(({theme}) => ({
    ...theme.typography.body.regular['300'],
    marginTop: '8px',
    marginBottom: '8px',
}));

const LessonImage = styled('img')(({theme}) => ({
    width: '40%',
    marginLeft: '32px',
}));

const Lesson = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id: lessonId} = useParams();
    const {lesson, lessonProgress, isLoading, lessonResult} = useSelector((state) => state.lesson);
    const [updateLesson, setUpdateLesson] = useState(true)

    useEffect(() => {
        if (updateLesson) {
            dispatch(getLesson(lessonId));
            setUpdateLesson(false)
        }
    }, [dispatch, lessonId, updateLesson]);

    const handleStartLesson = () => {
        setUpdateLesson(true)

        if (lessonProgress?.opened) {
            if (lessonProgress.currentQuestion === 0 && lessonProgress.attempts.length === 0) {
                navigate(`/theory/${lessonId}`);
            } else if (lessonProgress.currentQuestion < lessonProgress?.sessionQuestions.length || lessonProgress?.sessionQuestions.length === 0) {
                navigate(`/question/${lessonId}`);
            } else if (lessonProgress.currentQuestion === lessonProgress.sessionQuestions.length) {
                console.log(lessonProgress, lesson);
                navigate(`/finish/${lessonId}`);
            }
        }
    };

    return (
        <LessonContainer maxWidth="xl">
            {isLoading ? (
                <Loading/>
            ) : (
                <LessonContent>
                    <LessonInfo>
                        <LessonTitle>{lesson?.name}</LessonTitle>
                        <LessonDescription>{lesson?.description}</LessonDescription>
                        <CustomButton onClick={handleStartLesson}>Розпочати урок</CustomButton>
                    </LessonInfo>
                    <LessonImage src={catImage} alt="Hero"/>
                </LessonContent>
            )}
        </LessonContainer>
    );
};

export default Lesson;
