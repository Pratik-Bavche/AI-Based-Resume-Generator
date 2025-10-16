import express from 'express'
import protect from '../MiddleWare/authMiddleware.js';
import { enhanceJobDescription, enhanceProfessionalSummary, uploadResume } from '../Controllers/aiController.js';

const aiRouter=express.Router();


aiRouter.post('/enhance-pro-sum',protect,enhanceProfessionalSummary)
aiRouter.post('/enhance-job-description',protect,enhanceJobDescription)
aiRouter.post('/upload-resume',protect,uploadResume)

export default aiRouter;