import express from 'express';
import { loginController, signupController, uploadImageController } from '../controllers/auth.controller';
import { upload } from '../middlewares/multer';
const router = express.Router();

router.post('/signup', signupController);
router.post('/login', loginController);
router.post("/upload", upload.single("image"), uploadImageController);


export default router;