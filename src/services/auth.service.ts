import { loginData, signupData } from "../types/services";
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const signupService = async (data: signupData) => {
    const { fullName, email, password, role } = data;

    if (!fullName || !email || !password || !role) {
        throw new Error('All Fields are Required');
    }

    const user = await User.findOne({ email }).lean();
    if (user) {
        throw new Error('User Already Exists');
    }

    const allowedRoles = ['jobseeker', 'recruiter', 'admin'];
    if (!allowedRoles.includes(role)) {
        throw new Error('Invalid user role');
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        fullName, email, password: hashedPassword, role
    });

    const token = jwt.sign({ id: newUser._id, role: newUser.role, email: newUser.email, fullName: newUser.fullName }, process.env.JWT_SECRET as string);

    return {
        token,
        user: {
            id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            role: newUser.role
        }
    };
}

export const loginService = async (data: loginData) => {
    const { email, password } = data;

    if (!email || !password) {
        throw new Error('All Fields are Required');
    }

    const user = await User.findOne({ email }).lean();
    if (!user) {
        throw new Error('Email not Registered');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Credentials doesn't Match");
    }

    const token = jwt.sign({ id: user._id, role: user.role, email: user.email, fullName: user.fullName }, process.env.JWT_SECRET as string);

    return {
        token,
        user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            role: user.role
        }
    }
}
