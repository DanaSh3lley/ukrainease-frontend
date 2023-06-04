import React from 'react';
import {useSelector} from 'react-redux';
import {styled} from "@mui/system";
import {Button, Card} from "@mui/material";
import {ArrowRight} from "phosphor-react";

const LessonCardWrapper = styled(Card)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius.xl,
    alignItems: 'flex-start',
    gap: '20px',
    background: '#FFFFFF',
    boxShadow:'none'
}));

const LessonCardHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),

    '& img': {
        marginRight: theme.spacing(1),
    },
}));

const LessonCardBody = styled('div')(({theme}) => ({
    marginBottom: theme.spacing(2),
}));

const LessonTags = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing(1),

    '& > span': {
        ...theme.typography.body.tiny['300'],
        padding: theme.spacing(1.5),
        display: 'flex',
        background: theme.palette.secondary[50],
        borderRadius: '100px',
    }
}));

const Tag = styled('span')(({theme}) => ({
    ...theme.typography.caption,
}));

const LessonCardFooter = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-end',
}));

const Title = styled('h3')(({theme}) => ({
    ...theme.typography.subheading['01'],
}));

const Description = styled('p')(({theme}) => ({
    ...theme.typography.body['small-300'],
}));

const LessonCardButton = styled(Button)(({theme}) => ({
    '& .MuiButton-label': {
        ...theme.typography.button['small'],
    },
}));


const LessonCard = ({lesson}) => {
    const user = useSelector((state) => state.user.user);
    const {name, icon, description, price, level, requiredLevel, tags, progress, category, opened} = lesson;

    const available = user.level >= requiredLevel;
    const handleStartLesson = () => {
        // Handle start lesson button click
    };

    return (
        <LessonCardWrapper>
            <LessonCardHeader>
                <img src={icon} alt="Lesson Icon"/>
                <Title>{name}</Title>
            </LessonCardHeader>
            <LessonCardBody>
                <Description>{description}</Description>
                <LessonTags>
                    {tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                    <Tag>{category}</Tag>
                    <Tag>{progress}</Tag>
                    <Tag color="secondary">Рівень {level}</Tag>
                </LessonTags>
            </LessonCardBody>
            <div>
                {!opened && <span className="price">Ціна: {price}</span>}
                {!available && <span className="requiredLevel">Необхідний рівень: {requiredLevel}</span>}
            </div>
            <LessonCardFooter>
                {available ? (
                    <LessonCardButton
                        onClick={handleStartLesson}
                        variant="text"
                        color="primary"
                        endIcon={<ArrowRight/>}
                    >
                        {opened ? 'Learn' : 'Start'}
                    </LessonCardButton>
                ) : (
                    <Button disabled>Unavailable</Button>
                )}
            </LessonCardFooter>
        </LessonCardWrapper>
    );
};


export default LessonCard;
