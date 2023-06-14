import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Loading from "../../../component/UI/Loading";
import {styled} from "@mui/system";
import Container from "@mui/material/Container";
import {useNavigate} from "react-router-dom";
import Link from '@mui/material/Link';
import coins from '../../../assets/coins.svg'
import {LinearProgress} from "@mui/material";
import {getAwards} from "../../../actions/awardActions";
import AwardList from "../../../component/Award/AwardList";
import {getUserExperience} from "../../../actions/userExperienceActions";
import UserExperienceChart from "../../../component/Chart/UserExperienceChart";
import config from "../../../config";
import fire from '../../../assets/fire.svg'
import {logout} from "../../../actions/userActions";
import CustomButton from "../../../component/UI/CustomButton";

const imagesPath = `${config[process.env.NODE_ENV].images}`

const MainContainer = styled(Container)(({theme}) => ({
    margin: '60px auto 120px auto',
    display: 'flex',
    flexDirection: 'row',
    gap: '100px'
}));

const UserInfo = styled('div')(({theme}) => ({
    '& .MuiBox-root': {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'start'
    }
}));

const UserName = styled('div')(({theme}) => ({
    ...theme.typography.heading['04'],
    marginTop: '24px'
}));

const Coins = styled('div')(({theme}) => ({
    ...theme.typography.button.regular,
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
}));

const LeagueName = styled('div')(({theme}) => ({
    ...theme.typography.heading['06']
}));

const Title = styled('div')(({theme}) => ({
    ...theme.typography.heading['03'],
}));


const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user);
    const awards = useSelector((state) => state.awards.awards);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isLoadingAwards = useSelector((state) => state.awards.isLoading);
    const dailyExperiences = useSelector(
        (state) => state.userExperience.dailyExperiences
    );
    const userExperienceIsLoading = useSelector((state) => state.userExperience.isLoading);

    useEffect(() => {
        dispatch(getUserExperience());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAwards())
    }, [dispatch]);

    return (
        isLoading ? (
            <Loading/>
        ) : (
            <MainContainer maxWidth={'xl'}>
                <UserInfo item xs={4}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <img width={200} height={200} crossorigin="anonymous"
                             src={`${imagesPath}/users/${user.photo}`}/>
                        <UserName variant="h6">{user.name}</UserName>
                        <Link sx={{marginTop: '8px'}} underline="none"
                              href={'/update'}>Налаштування</Link>
                        <Coins>{<img src={coins}/>}{user.coins}</Coins>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mt: 2,
                                backgroundColor: '#FFFFFF',
                                borderRadius: '16px',
                                p: 2,
                            }}
                        >
                            <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                                <Grid
                                    sx={{
                                        mr: 1,
                                        width: '40px',
                                        height: '40px',
                                        background: '#CABDFC',
                                        border: '3px #7A5AF8 solid',
                                        borderRadius: '50px',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {user.level}
                                </Grid>
                                <Grid sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography variant="h6">Рівень</Typography>
                                    <Typography variant="body1">
                                        {user.experiencePoints} досвіду до нового рівня
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', mt: 0}}>
                                <Typography variant="h6" sx={{mr: 1}}>
                                    {user.experiencePoints}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={(user.experiencePoints / user.nextLevelRequired) * 100}
                                    sx={{ml: 1, width: '200px', height: '40px', borderRadius: '50px'}}
                                />
                                <Typography variant="h6" sx={{ml: 1}}>
                                    {user.nextLevelRequired}
                                </Typography>
                            </Box>
                        </Box>

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
                            <LeagueName variant="body1">{user.league.name}</LeagueName>
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
                         alt={'fire icon'}/>
                            <LeagueName variant="body1">{user.streak}</LeagueName>
                            <Typography variant="body1">днів безперервного навчання</Typography>
                        </Grid>
                    </Box>

                    <CustomButton sx={{marginTop: '20px'}} variant={'contained'} color={'error'} href={'/'} onClick={() => dispatch(logout())}>Вийти</CustomButton>
                </UserInfo>
                <Grid item xs={8}>
                    <Box display="flex" flexDirection="column" alignItems="start">
                        <Grid sx={{
                            display: 'flex',
                            gap: '46px',
                            alignItems: 'center'
                        }}>
                            <Title>Досягнення</Title>
                            <Link underline={'none'} sx={{fontSize: '17px'}} href={'/awards'}>Показати всі</Link>
                        </Grid>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            {isLoadingAwards ? <Loading/> : <AwardList displayRandom={true} awards={awards}/>}
                        </Box>
                        <Grid sx={{
                            display: 'flex',
                            gap: '46px',
                            alignItems: 'center',
                            marginTop: '30px'
                        }}>
                            <Title>Статистика</Title>
                        </Grid>
                        {userExperienceIsLoading ? <Loading/> :
                            <UserExperienceChart dailyExperiences={dailyExperiences}/>}

                    </Box>
                </Grid>
            </MainContainer>
        )
    );
};

export default Profile;
