// DashboardPage.js
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/system";
import Container from "@mui/material/Container";
import catImage from '../../../assets/hero.svg'
import CustomButton from "../../../component/UI/CustomButton";
import {getNeedReviewLessons, getRecommendedLessons} from "../../../actions/lessonActions";
import LessonCard from "../../../component/UI/LessonCard";
import fire from "../../../assets/fire.svg";
import config from "../../../config";

const imagesPath = `${config[process.env.NODE_ENV].images}`

const MainContainer = styled(Container)(({theme}) => ({
    margin: '60px auto',
    display: 'flex',
    flexDirection: 'column',
}));

const HelloSection = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '60px'
}));

const Title = styled('div')(({ theme }) => ({
    ...theme.typography.heading['03'],
    margin: '16px 0', // Add margin to create spacing around the titles
}));

const Description = styled('p')(({theme}) => ({
    ...theme.typography.body.xtraLarge['400'],
    marginTop: 0,
}));

const Progress = styled(Grid)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '32px'
}));

const ProgressName = styled('div')(({theme}) => ({
    ...theme.typography.heading['06']
}));

const StyledImage = styled('img')({
    width: '40%',
});

const TextContent = styled(Grid)({
    display: 'flex',
    flexDirection: 'column'
});


const LessonRecommendationSection = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    margin: '16px 0', // Add margin to create spacing between recommendation sections
});

const DashboardPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const recommendation = useSelector(state => state.lessons.recommendation)
    const needReview = useSelector(state => state.lessons.needReview)

    useEffect(() => {
        dispatch(getRecommendedLessons())
    }, [dispatch])

    useEffect(() => {
        dispatch(getNeedReviewLessons())
    }, [dispatch])

    needReview.grammar.map(lesson => {
        lesson.progress = 'needReview'
        lesson.opened = true
    })
    needReview.vocabulary.map(lesson => {
        lesson.progress = 'needReview'
        lesson.opened = true
    })
    needReview.typicalError.map(lesson => {
        lesson.progress = 'needReview'
        lesson.opened = true
    })

    recommendation.grammar.map(lesson => {
        lesson.progress = 'notStarted'
        lesson.opened = false
    })
    recommendation.vocabulary.map(lesson => {
        lesson.progress = 'notStarted'
        lesson.opened = false
    })
    recommendation.typicalError.map(lesson => {
        lesson.progress = 'notStarted'
        lesson.opened = false
    })

    return (
        <MainContainer maxWidth={'xl'}>
            <HelloSection>
                <StyledImage src={catImage} alt="Hero"/>
                <TextContent><Title>З поверненням, {user.name}</Title>
                    <Description>Ми раді бачити вас тут знову. Завжди чудово мати когось такого, хто так відданий
                        вивченню
                        мови, як ти.
                        Наразі ви досягли чудових успіхів, і ми хочемо привітати вас із вашими досягненнями. Ви повинні
                        пишатися собою.
                        Продовжуйте так само, і, можливо, ви досягнете вершини.
                        Пам’ятайте, вивчення нової мови потребує часу та відданості, але за допомогою правильних
                        інструментів ви можете зробити це набагато простіше. Ми віримо в вас, і ми тут, щоб підтримувати
                        вас
                        на кожному кроці.</Description>
                    <Progress>
                        <Grid
                            sx={{
                                backgroundColor: '#FFFFFF',
                                padding: '24px',
                                borderRadius: '16px',
                                marginTop: '16px',
                                width: '-webkit-fill-available',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <img
                                alt={user.league.name}
                                src={`${imagesPath}/leagues/${user.league.icon}`}
                                width={60} height={60}
                            />
                            <ProgressName variant="body1">{user.league.name}</ProgressName>
                            <Link sx={{marginTop: '8px'}} underline="none" href={'/leaderboard'}>Leaderboard</Link>
                        </Grid>
                        <Grid
                            sx={{
                                backgroundColor: '#FFFFFF',
                                padding: '24px',
                                borderRadius: '16px',
                                marginTop: '16px',
                                width: '-webkit-fill-available',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        > <img
                            src={fire}
                            width={'60px'} height={'60px'}
                        />
                            <ProgressName>{user.streak}</ProgressName>
                            <Typography variant="body1">днів безперервного навчання</Typography>
                        </Grid>
                    </Progress>
                </TextContent>
            </HelloSection>
            <LessonRecommendationSection>
                {needReview.grammar.length ? (
                    <>
                        <Title>
                            Час повторити наступні граматичні теми: <CustomButton href={'/grammar'}>Показати більше</CustomButton>
                        </Title>
                        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                            {needReview.grammar.map((lesson) => (
                                <Grid item xs={12} sm={6} md={3} key={lesson._id}>
                                    <LessonCard lesson={lesson}/>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                ) : (
                    <>
                        <Title>
                            Рекомендовані граматичні уроки: <CustomButton href={'/grammar'}>Показати більше</CustomButton>
                        </Title>
                        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                            {recommendation.grammar.map((lesson) => (
                                <Grid item xs={12} sm={6} md={3} key={lesson._id}>
                                    <LessonCard lesson={lesson}/>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
            </LessonRecommendationSection>

            <LessonRecommendationSection>
                {needReview.vocabulary.length ? (
                    <>
                        <Title>
                            Час повторити нові слова: <CustomButton href={'/vocabulary'}>Показати більше</CustomButton>
                        </Title>
                        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                            {needReview.vocabulary.map((lesson) => (
                                <Grid item xs={12} sm={6} md={3} key={lesson._id}>
                                    <LessonCard lesson={lesson}/>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                ) : (
                    <>
                        <Title>
                            Рекомендовані набори слів: <CustomButton href={'/vocabulary'}>Показати більше</CustomButton>
                        </Title>
                        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                            {recommendation.vocabulary.map((lesson) => (
                                <Grid item xs={12} sm={6} md={3} key={lesson._id}>
                                    <LessonCard lesson={lesson}/>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
            </LessonRecommendationSection>

            <LessonRecommendationSection>
                {needReview.typicalError.length ? (
                    <>
                        <Title>
                            Час повторити наголоси та продовжити позбуватися від суржику: <CustomButton href={'/errors'}>Показати
                            більше</CustomButton>
                        </Title>
                        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                            {needReview.typicalError.map((lesson) => (
                                <Grid item xs={12} sm={6} md={3} key={lesson._id}>
                                    <LessonCard lesson={lesson}/>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                ) : (
                    <>
                        <Title>
                            Розпочинай нові уроки для позбавлення типових помилок: <CustomButton href={'/errors'}>Показати
                            більше</CustomButton>
                        </Title>
                        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                            {recommendation.typicalError.map((lesson) => (
                                <Grid item xs={12} sm={6} md={3} key={lesson._id}>
                                    <LessonCard lesson={lesson}/>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
            </LessonRecommendationSection>
        </MainContainer>
    );
};

export default DashboardPage;
