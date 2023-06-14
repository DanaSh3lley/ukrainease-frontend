import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getLeaderboard } from '../../actions/LeaderboardActions';
import Grid from "@mui/material/Grid";
import heroSection from "../../assets/hero.svg";
import { ArrowFatDown, ArrowFatRight, ArrowFatUp } from "phosphor-react";
import Loading from "../UI/Loading";
import config from "../../config";

const imagesPath = `${config[process.env.NODE_ENV].images}`

// Styled components
const LeaderboardWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 60px auto;
`;

const LeaderboardDescription = styled(Typography)`
  margin-left: 8px;
`;

const LeaderboardHeader = styled(Box)`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 24px;
`;

const LeaderboardTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    ...theme.typography.heading['02'],
    maxWidth: '720px'
}));

const Description = styled(Typography)(({ theme }) => ({
    ...theme.typography.body.large['400'],
}));


const LeaderboardItemWrapper = styled(Card)`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  max-width: 850px;
  margin: 0 auto;
  width: 100%;
  border-radius: 8px;
  padding: 8px;
`;

const LeaderboardUserInfo = styled(CardContent)(({ theme }) => ({
    marginRight: '8px',
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    ...theme.typography.body.xxl['400'],
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '24px 32px'
}));


const UserInfoImage = styled('div')`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
`;

const LeaderboardInfoWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;


const LeaderboardDescriptionInfo = styled(Typography)(({ theme }) => ({
    marginRight: '8px',
    ...theme.typography.body.xxl['400'],
}));

const LeaderboardLeagueIcon = styled('img')`
  width: 120px;
  height: 120px;
  backgroundColor: 'lightblue';
`;

const StyledImage = styled('img')({
    width: '40%',
    minWidth: '320px'
});

const ArrowIconUp = styled(ArrowFatUp)`
  color: green;
  font-size: 24px;
`;

const ArrowIconDown = styled(ArrowFatDown)`
  color: red;
  font-size: 24px;
`;

const Leaderboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const group = useSelector((state) => state.leaderboard.group);
    const league = useSelector((state) => state.leaderboard.league);
    const nextLeague = useSelector((state) => state.leaderboard.nextLeague);
    const isLoading = useSelector(state => state.leaderboard.isLoading);

    useEffect(() => {
        dispatch(getLeaderboard());
    }, [dispatch]);

    return (
        <LeaderboardWrapper>
            <LeaderboardTitle>Leaderboard</LeaderboardTitle>
            <LeaderboardHeader>
                <Grid>
                    <StyledImage src={heroSection} alt="Hero" />
                </Grid>
                <Grid sx={{ flexDirection: 'column' }}>
                    <Description>Наразі ви знаходитесь в {league?.name} Ви досягаєте великих успіхів у вивченні української мови. Продовжуйте працювати та зосереджуйтеся на досягненні своїх цілей. Випробуйте себе, щоб досягти наступного рівня та заробити ще більше балів!</Description>
                    <Grid>
                        {league && <LeaderboardLeagueIcon src={`${imagesPath}/leagues/${league?.icon}`} alt="League Icon" />}
                        <ArrowFatRight weight="duotone" size={60} style={{ color: '#0F9918' }} />
                        {nextLeague && <LeaderboardLeagueIcon src={`${imagesPath}/leagues/${nextLeague?.icon}`} alt="Next League Icon" />}
                    </Grid>
                </Grid>
            </LeaderboardHeader>

            {isLoading ? (
                <Loading />
            ) : (
                group &&
                group.map((item, index) => {
                    const isCurrentUser = item.user.id === user.id;
                    const isTopThree = index < 3;
                    const isBottomThree = index >= group.length - 3;

                    return (
                        <LeaderboardItemWrapper key={index} style={{ backgroundColor: isCurrentUser ? '#E4DEFE' : 'inherit' }}>
                            <LeaderboardUserInfo>
                                <LeaderboardDescriptionInfo>
                                    {index + 1}
                                </LeaderboardDescriptionInfo>
                                <UserInfoImage style={{ backgroundImage: `url(${imagesPath}/users/${item.user.photo})` }} />
                                <LeaderboardDescriptionInfo>{item.user.name}</LeaderboardDescriptionInfo>
                                <LeaderboardInfoWrapper>
                                    <LeaderboardDescriptionInfo>
                                        {item.totalExperience} XP
                                    </LeaderboardDescriptionInfo>
                                    {isTopThree && <ArrowIconUp />}
                                    {isBottomThree && <ArrowIconDown />}
                                </LeaderboardInfoWrapper>
                            </LeaderboardUserInfo>
                        </LeaderboardItemWrapper>
                    );
                })
            )}
        </LeaderboardWrapper>
    );
};

export default Leaderboard;
