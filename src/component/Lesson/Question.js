import SingleChoice from "./SingleChoice";
import FillBlank from "./FillBlank";
import MultipleChoice from "./MultipleChoice";
import Matching from "./Matching";
import Card from "./Card";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Question = ({question, lesson, lessonProgress, setAnswer, answer, lessonId}) => {
    const type = question?.type
    const navigate = useNavigate()

    useEffect(() => {
        if (lesson && lessonProgress?.sessionQuestions.length !== 0 && lessonProgress?.currentQuestion === lessonProgress?.sessionQuestions.length) {
            console.log('navag')
            navigate(`/finish/${lesson._id}`)
        }
    }, []);

    return <>
        {(type === 'singleChoice' || type === 'trueFalse') &&
            <SingleChoice setAnswer={setAnswer} question={question}/>}
        {(type === 'fillBlank' || type === 'shortAnswer') && <FillBlank setAnswer={setAnswer} question={question}/>}
        {type === 'multipleChoice' && <MultipleChoice setAnswer={setAnswer} question={question}/>}
        {type === 'matching' && <Matching setAnswer={setAnswer} question={question}/>}
        {type === 'card' && <Card lessonId={lessonId} setAnswer={setAnswer} answer={answer} question={question}/>}
    </>
}

export default Question