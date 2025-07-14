import { loginService, signupService } from "../services/auth.service";
import { Request, Response } from 'express';
import { loginValidation, signupValidation } from "../validations/auth.validations";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

export const signupController = async (req: Request, res: Response) => {
    const data = req.body;

    signupValidation(data);

    try {
        const {user, token} = await signupService(data);
        res.status(201).json({ message: 'User Created Successfully', token, user });
    }
    catch (error) {
        console.error(`Error during signup:`, error);

        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Something went wrong" });
        }
    }
}

export const loginController = async (req: Request, res: Response) => {
    const data = req.body;

    loginValidation(data);

    try {
        const { user, token } = await loginService(data);
        res.status(200).json({ message: 'User LoggedIn Successfully', token, user });
    }
    catch (error) {
        console.error(`Error during signup:`, error);

        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Something went wrong" });
        }
    }
}


export const uploadImageController = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await uploadToCloudinary(req.file.buffer, "jobsy/companyImages");

    res.json({
      message: "Image uploaded successfully",
      url: result.url,
      public_id: result.public_id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Image upload failed" });
  }
};
