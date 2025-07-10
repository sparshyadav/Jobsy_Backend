import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
    fullName: string;
    email: string;
    password: string;
    role: 'jobseeker' | 'recruiter' | 'admin';
    phone?: string;
    location?: string;
    bio?: string;

    experience?: Array<{
        company: string;
        title: string;
        startDate: Date;
        endDate?: Date;
        description?: string;
    }>

    education?: Array<{
        institution: string;
        degree: string;
        fieldOfStudy: string;
        startDate: Date;
        endDate?: Date;
    }>

    skills?: string[];
    resume?: string;

    appliedJobs?: mongoose.Types.ObjectId[];
    bookmarkedJobs?: mongoose.Types.ObjectId[];

    socialLinks?: {
        linkedIn?: string;
        github?: string;
        portfolio?: string;
        twitter?: string;
    }
}