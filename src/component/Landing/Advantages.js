import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import {styled} from '@mui/system';
import icon1 from './icons/icon1.svg';
import icon2 from './icons/icon2.svg';
import icon3 from './icons/icon3.svg';
import icon4 from './icons/icon4.svg';
import icon5 from './icons/icon5.svg';
import icon6 from './icons/icon6.svg';

const StyledAdvantagesContainer = styled(Container)(({theme}) => ({
    marginTop: theme.spacing(8),
}));

const StyledTitle = styled(Typography)(({theme}) => ({
    textAlign: 'center',
    ...theme.typography.heading['02'],
    marginBottom: '12px'
}));

const StyledDescription = styled(Typography)(({theme}) => ({
    textAlign: 'center',
    ...theme.typography.subheading['02'],
}));
const TextTitle = styled(Typography)(({theme}) => ({
    ...theme.typography.subheading['02'],
}));
const TextDescription = styled(Typography)(({theme}) => ({
    ...theme.typography.body.smalls['400'],
}));

const StyledAdvantagesWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(2),
    marginTop: theme.spacing(4),
}));

const StyledAdvantageCard = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'calc(33.33% - 16px)', // 3 items in a row
    borderRadius: 12,
    marginBottom: '32px'
}));

const StyledAdvantageIcon = styled('div')(({theme}) => ({
    marginBottom: theme.spacing(1),
    svg: {
        width: 48,
        height: 48,
        fill: theme.palette.primary.main,
    },
}));

const StyledAdvantageText = styled('div')(({theme}) => ({
    textAlign: 'center',
    maxWidth: 350,
    background: 'white',
    borderRadius: '12px',
    padding: '12px'
}));

const AdvantagesSection = () => {
    return (
        <StyledAdvantagesContainer maxWidth={'xl'}>
            <StyledTitle variant="h2">
                Переваги UkrainEase
            </StyledTitle>
            <StyledDescription variant="body2">
                Чому UkrainEase - це найкращий вибір для вивчення української мови
            </StyledDescription>
            <StyledAdvantagesWrapper>
                <StyledAdvantageCard>
                    <StyledAdvantageIcon>
                        <img src={icon1} alt={'icon'}/>
                    </StyledAdvantageIcon>
                    <StyledAdvantageText>
                        <TextTitle variant="subtitle2">
                            Антисуржик
                        </TextTitle>
                        <TextDescription variant="body2">
                            Наш додаток забезпечує правильність використання української мови та відсутність суржику.
                        </TextDescription>
                    </StyledAdvantageText>
                </StyledAdvantageCard>
                <StyledAdvantageCard>
                    <StyledAdvantageIcon>
                        <img src={icon2} alt={'icon'}/>
                    </StyledAdvantageIcon>
                    <StyledAdvantageText>
                        <TextTitle variant="subtitle2">
                            Інтервальні повторення
                        </TextTitle>
                        <TextDescription variant="body2">
                            UkrainEase використовує систему повторень, що дозволяє краще запам'ятовувати матеріал та
                            швидше просуватися у вивченні мови.
                        </TextDescription>
                    </StyledAdvantageText>
                </StyledAdvantageCard>
                <StyledAdvantageCard>
                    <StyledAdvantageIcon>
                        <img src={icon3} alt={'icon'}/>
                    </StyledAdvantageIcon>
                    <StyledAdvantageText>
                        <TextTitle variant="subtitle2">
                            Граматика
                        </TextTitle>
                        <TextDescription variant="body2">
                            Наш додаток допоможе вам зрозуміти основні граматичні правила української мови та
                            застосовувати їх у практиці.
                        </TextDescription>
                    </StyledAdvantageText>
                </StyledAdvantageCard>
                <StyledAdvantageCard>
                    <StyledAdvantageIcon>
                        <img src={icon4} alt={'icon'}/>
                    </StyledAdvantageIcon>
                    <StyledAdvantageText>
                        <TextTitle variant="subtitle2">
                            Наголоси
                        </TextTitle>
                        <TextDescription variant="body2">
                            UkrainEase допоможе вам зрозуміти та правильно використовувати наголоси в українській мові.
                        </TextDescription>
                    </StyledAdvantageText>
                </StyledAdvantageCard>
                <StyledAdvantageCard>
                    <StyledAdvantageIcon>
                        <img src={icon5} alt={'icon'}/>
                    </StyledAdvantageIcon>
                    <StyledAdvantageText>
                        <TextTitle variant="subtitle2">
                            Гейміфікація
                        </TextTitle>
                        <TextDescription variant="body2">
                            Наш додаток мотивує до вивчення мови за допомогою завдань ти досягнень, що додає веселощів й
                            інтерактивності процесу навчання.
                        </TextDescription>
                    </StyledAdvantageText>
                </StyledAdvantageCard>
                <StyledAdvantageCard>
                    <StyledAdvantageIcon>
                        <img src={icon6} alt={'icon'}/>
                    </StyledAdvantageIcon>
                    <StyledAdvantageText>
                        <TextTitle variant="subtitle2">
                            Інтерактивні вправи
                        </TextTitle>
                        <TextDescription variant="body2">
                            Інтерактивні вправи допоможуть вам швидше засвоїти правила граматики та розуміти, як
                            правильно використовувати слова.
                        </TextDescription>
                    </StyledAdvantageText>
                </StyledAdvantageCard>

            </StyledAdvantagesWrapper>
        </StyledAdvantagesContainer>
    );
};

export default AdvantagesSection;
