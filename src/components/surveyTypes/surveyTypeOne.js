import React from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import json from '../surveys/surveyQuestionOne'
import axios from 'axios';

const Mysurvey = ()=> {
    // const newSurvey = {data => data.valuesHash};
    const url = 'https://tea-harshit-project.herokuapp.com/create-survey/';
    // const url = 'http://localhost:5000/create-survey/'
    return (
        <Survey.Survey
        showCompletedPage = {true}


        onComplete = {data =>
            axios.post(url, data.valuesHash).then(res => {
            console.log(res);
            console.log(res.data);
        })}
        //onComplete = {data => console.log(data.valuesHash)}
        json = {json}

        />
    )
}

export default Mysurvey;
