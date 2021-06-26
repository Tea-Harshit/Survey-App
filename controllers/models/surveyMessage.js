import mongoose from 'mongoose';

const surveySchema = mongoose.Schema({
    healthProblems: [String],
    healthStatus: String,
    problemDuration: String,
    underMedication: String,
    surgery: String,

    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var SurveyMessage = mongoose.model('SurveyMessage', surveySchema);

export default SurveyMessage;