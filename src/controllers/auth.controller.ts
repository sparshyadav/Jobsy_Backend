import { loginService, signupService } from "../services/auth.service";
import { Request, Response } from 'express';

export const signupController = async (req: Request, res: Response) => {
    const data = req.body;

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
