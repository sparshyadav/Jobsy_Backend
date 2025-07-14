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

export interface IJob extends Document {
    title: string;
    description: string;
    requirements: string[];
    skillsRequired: string[];
    company: mongoose.Types.ObjectId;
    postedBy: mongoose.Types.ObjectId;
    location: string;
    salary: string;
    department: "engineering" | "marketing" | "design" | "sales" | "hr" | "product";
    workMode: "remote" | "onsite" | "hybrid";
    employmentType: "full-time" | "part-time" | "contract" | "internship" | "temporary";
    applicants: mongoose.Types.ObjectId[];
    experienceLevel: "entry" | "mid" | "senior" | "lead";
    joiningDate: Date;
    status: "open" | "closed" | "paused";
    views: number;
    applicationClosingDate: Date;
    tags: string[];
}

export interface ICompany extends Document {
    name: string;
    description?: string;
    website?: string;
    industry: "Software" | "Finance" | "Healthcare" | "Education" | "Retail" | "Marketing" | "Other";
    location?: string;
    logo?: string;
    size?: "1-50" | "51-500" | "501-2500" | "2501-5000" | "5001+";
    foundedBy?: string;
    socialLinks?: {
        linkedIn?: string;
        twitter?: string;
        facebook?: string;
    };
    jobsPosted: Types.ObjectId[];
}