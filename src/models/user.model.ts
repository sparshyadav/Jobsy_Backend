import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/models";

const userSchema: Schema<IUser> = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['jobseeker', 'recruiter', 'admin'],
        required: true
    },
    phone: String,
    location: String,
    bio: String,
    experience: {
        type: [
            {
                company: String,
                title: String,
                startDate: Date,
                endDate: Date,
                description: String
            }
        ],
        default: []
    },
    education: {
        type: [
            {
                institution: String,
                degree: String,
                fieldOfStudy: String,
                startDate: Date,
                endDate: Date,
            }
        ],
        default: []
    },
    skills: {
        type: [String],
        default: []
    },
    resume: String,
    appliedJobs: {
        type: [Schema.Types.ObjectId],
        ref: 'Job',
        default: []
    },
    bookmarkedJobs: {
        type: [Schema.Types.ObjectId],
        ref: 'Job',
        default: []
    },
    socialLinks: {
        linkedIn: String,
        github: String,
        portfolio: String,
        twitter: String,
    },
}, { timestamps: true });

export default mongoose.model<IUser>('User', userSchema);