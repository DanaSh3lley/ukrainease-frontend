import {styled} from "@mui/system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CustomStepper from "../../../component/UI/CustomStepper";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Typography} from "@mui/material";
import catImage from "../../../assets/hero.svg";
import coins from "../../../assets/coins.svg";
import experience from "../../../assets/experience.svg";
import CustomButton from "../../../component/UI/CustomButton";

const RootContainer = styled(Container)({
    margin: '60px auto',
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

const Description = styled('p')(({theme}) => ({
    ...theme.typography.body.xtraLarge['400'],
    marginTop: 0,
    maxWidth: '600px'
}));

const StyledImage = styled('img')({
    width: '40%',
});

const Coins = styled('div')(({theme}) => ({
    ...theme.typography.button.regular,
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
}));

const LessonReward = () => {
    const dispatch = useDispatch();
    const {id: lessonId} = useParams();
    const navigate = useNavigate();
    const {lessonResult, lesson} = useSelector((state) => state.lesson);
    console.log(lessonResult)
    return lessonResult ? (<RootContainer maxWidth={'xl'}>
        <Grid flex={1}>
            <Title component="h1" gutterBottom>
                {lesson?.name} <StyledBadge>Нагорода</StyledBadge>
            </Title>
            <Grid sx={{display: 'flex', gap: '60px', alignItems: 'center'}}>
                <StyledImage src={catImage} alt="Hero"/>
                <Description>Вітаємо, так тримати!
                    Чудова робота, ви правильно відповіли  <b>{lessonResult?.totalCorrect}</b> питань
                    з  <b>{lessonResult?.totalQuestions}</b> вправ! Це чудовий результат!
                    Ви на один крок блище до досягнення вершини!
                    <Coins>{<img src={coins}/>}+{lessonResult.totalCoinsEarned}</Coins>
                    <Coins>{<img src={experience}/>}+{lessonResult.totalExperienceEarned}</Coins>
                    Продовжуйте так само, і не забудьте переглянути наші інші уроки, щоб ще більше розширити свої мовні навички.
                </Description>
            </Grid>

            <CustomButton sx={{marginTop: '20px'}} size={'large'} variant={'contained'} href={`/${lesson.lessonType}`}>Назад до каталогу</CustomButton>
        </Grid>
        <CustomStepper activeStep={4}/>
    </RootContainer>) : 'oh, something wrong'
}

export default LessonReward