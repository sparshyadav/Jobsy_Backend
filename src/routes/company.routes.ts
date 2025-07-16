import express from 'express';
import { upload } from '../middlewares/multer';
import { isLoggedIn, isRecruiter } from '../middlewares/auth.middleware';
import { createCompanyController } from '../controllers/company.controller';
const router = express.Router();

router.post("/", isLoggedIn, isRecruiter, upload.single("logo"), createCompanyController);

export default router;
