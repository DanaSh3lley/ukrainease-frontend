import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import {styled} from '@mui/system';
import CustomButton from "../UI/CustomButton";
import image1 from './icons/info1.svg';
import image2 from './icons/info2.svg';
import image3 from './icons/info3.svg';
import Grid from "@mui/material/Grid";


const StyledSectionContainer = styled(Container)(({theme}) => ({
    marginTop: theme.spacing(8),
}));

const StyledComponentWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '130px',
    alignItems: 'center',
}));

const StyledTitle = styled(Typography)(({theme}) => ({
    ...theme.typography.heading03,
}));

const StyledText = styled(Typography)(({theme}) => ({
    ...theme.typography.bodyLarge300,
}));

const StyledImage = styled('img')({
    width: 300,
});

const Info = () => {
    return (
        <StyledSectionContainer>
            <StyledComponentWrapper>
                <StyledImage src={image1} alt="Image 1"/>
                <Grid sx={{maxWidth: '640px'}}>
                    <StyledTitle variant="h3">Українська - важливо</StyledTitle>
                    <StyledText variant="body1">
                        Як державна мова України, українська є життєво важливою складовою національної ідентичності та
                        культурної спадщини країни. Вивчаючи українську, ви також допоможете зберегти та популяризувати цю
                        прекрасну та унікальну мову для майбутніх поколінь.
                    </StyledText>
                </Grid>
            </StyledComponentWrapper>

            <StyledComponentWrapper>
                <Grid sx={{maxWidth: '640px'}}>
                    <StyledTitle variant="h3">Ціна</StyledTitle>
                    <StyledText variant="body1">
                        Однією з наших основних цінностей в UkrainEase є доступність. Ми вважаємо, що вивчення української
                        мови має бути доступним кожному, незалежно від матеріального становища. Ми віримо, що безкоштовний
                        додаток дозволить більшій кількості людей відкрити для себе Українського Героя та скористатися нашим
                        інноваційним підходом до вивчення мови.
                    </StyledText>
                </Grid>
                <StyledImage src={image2} alt="Image 2"/>
            </StyledComponentWrapper>

            <StyledComponentWrapper>
                <StyledImage src={image3} alt="Image 3"/>
                <Grid sx={{maxWidth: '640px'}}>
                    <StyledTitle variant="h3">Розпочнемо?</StyledTitle>
                    <StyledText variant="body1">
                        Зустрічайте Плямку, свого товариша та помічника! Плямка допоможе вам під час вивчення мови та
                        зробить процес цікавим і захоплюючим.
                        <br/>
                        Так навіщо чекати? Зареєструйтесь сьогодні та почніть вивчати українську мову разом із Плямкою!
                    </StyledText>
                    <CustomButton href={'/signup'} sx={{marginTop: '12px'}} variant={'contained'}>Розпочати</CustomButton>
                </Grid>
            </StyledComponentWrapper>
        </StyledSectionContainer>
    );
};

export default Info;
