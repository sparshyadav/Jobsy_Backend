import express from 'express';
import { loginController, signupController, uploadImageController } from '../controllers/auth.controller';
import { upload } from '../middlewares/multer';
import { isAdmin, isLoggedIn } from '../middlewares/auth.middleware';
import { createCompanyController } from '../controllers/company.controller';
const router = express.Router();

router.post("/", isLoggedIn, isAdmin, upload.single("logo"), createCompanyController);

export default router;
