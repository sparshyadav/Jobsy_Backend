import { signupData } from "../types/services";
import User from '../models/user.model';
import bcrypt from 'bcrypt';

export const signupService = async (data: signupData) => {
    const { fullName, email, password, role } = data;

    if (!fullName || !email || !password || !role) {
        throw new Error('All Fields are Required');
    }

    const user = await User.findOne({ email });
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

    return {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role
    };
}

