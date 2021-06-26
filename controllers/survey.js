import express from 'express';

import SurveyMessage from './models/surveyMessage.js';

const router = express.Router();

export const createSurvey = async (req, res) => {
    const { healthProblems, healthDuration, healthStatus, surgery, underMedication } = req.body;

    const newSurveyMessage = new SurveyMessage({healthProblems, healthDuration, healthStatus, surgery, underMedication })

    try {
        await newSurveyMessage.save();

        res.status(201).json(newSurveyMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;