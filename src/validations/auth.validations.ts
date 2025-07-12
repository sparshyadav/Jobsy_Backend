import { loginData, signupData } from "../types/services";

export const signupValidation = (data: signupData) => {
    const { fullName, email, password, role } = data;

    if (!fullName || !email || !password || !role) {
        throw new Error('All Fields are Required');
    }

    const allowedRoles = ['jobseeker', 'recruiter', 'admin'];
    if (!allowedRoles.includes(role)) {
        throw new Error('Invalid user role');
    }
}

export const loginValidation=(data: loginData)=>{
    const { email, password } = data;

    if (!email || !password) {
        throw new Error('All Fields are Required');
    }
}