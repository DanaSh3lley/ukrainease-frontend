import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styled} from '@mui/system';
import {Alert, Button, Card, Snackbar} from '@mui/material';
import {ArrowRight} from 'phosphor-react';
import {startLesson} from '../../actions/singleLessonActions';
import {useNavigate} from "react-router-dom";
import config from "../../config";
const imagesPath = `${config[process.env.NODE_ENV].images}`


const LessonCardWrapper = styled(Card)(({theme}) => ({
    display: 'grid',
    overflow: 'hidden',
    gridAutoRows: '1fr',
    gridColumnGap: '5px',
    gridRowGap: '5px',
    maxHeight: '350px',
    padding: theme.spacing(3),
    borderRadius: '16px',
    alignItems: 'flex-start',
    background: '#FFFFFF',
    boxShadow: 'none',
}));

const LessonCardHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    '& img': {
        height: '64px',
        width: '64px',
        background: 'lightblue',
        marginRight: theme.spacing(1),
    },
}));

const LessonCardBody = styled('div')(({theme}) => ({
    marginBottom: theme.spacing(2),
}));

const LessonTags = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap: theme.spacing(1),

    '& > span': {
        ...theme.typography.body.tiny['300'],
        padding: theme.spacing(1.5),
        display: 'flex',
        background: theme.palette.secondary[50],
        borderRadius: '100px',
    },
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
    marginTop: '8px',
    marginBottom: '8px'
}));

const Description = styled('p')(({theme}) => ({
    ...theme.typography.body['small-300'],
    maxHeight: '60px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}));

const LessonCardButton = styled(Button)(({theme}) => ({
    '& .MuiButton-label': {
        ...theme.typography.button['small'],
    },
}));

const LessonCard = ({lesson}) => {
    const user = useSelector((state) => state.user.user);
    const {name, icon, description, price, level, requiredLevel, tags, progress, category, opened} = lesson;
    const dispatch = useDispatch();

    const available = user.level >= requiredLevel;

    const navigate = useNavigate()

    const handleStartLesson = (e) => {
        e.preventDefault();
        if (!opened) {
            dispatch(startLesson(lesson._id))
        }
        navigate('/lesson/' + lesson._id)
    };


    return (
        <LessonCardWrapper>
            <LessonCardHeader>
                <img style={{borderRadius: '12px'}} src={`${imagesPath}/lessons/${icon}`} alt="Lesson Icon"/>
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
                {!opened && <div className="price">Ціна: {price}</div>}
                {!available && <div className="requiredLevel">Необхідний рівень: {requiredLevel}</div>}
            </div>
            <LessonCardFooter>
                {available ? (
                    <LessonCardButton onClick={handleStartLesson} variant="text" color="primary"
                                      endIcon={<ArrowRight/>}>
                        {opened ? 'Вчити' : 'Розпочати'}
                    </LessonCardButton>
                ) : (
                    <Button disabled>Недоступно</Button>
                )}
            </LessonCardFooter>
        </LessonCardWrapper>
    );
};

export default LessonCard;
