import express from 'express';
import {createSurvey } from '../controllers/survey.js';


const router = express.Router();

router.post('/', createSurvey);

export default router;