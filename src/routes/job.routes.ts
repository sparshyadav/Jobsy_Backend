import express from 'express';
import { isLoggedIn, isRecruiter } from '../middlewares/auth.middleware';;
import { createJobController } from '../controllers/job.controller';
const router = express.Router();

router.post("/", isLoggedIn, isRecruiter, createJobController);

export default router;
