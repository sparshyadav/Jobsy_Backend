import mongoose, { Schema } from 'mongoose';
import { IJob } from "../types/models";

const jobSchema: Schema<IJob> = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    requirements: {
        type: [String],
        default: []
    },
    skillsRequired: {
        type: [String],
        default: []
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        enum: ["engineering", "marketing", "design", "sales", "hr", "product"],
        required: true,
    },
    workMode: {
        type: String,
        enum: ["remote", "onsite", "hybrid"],
        required: true,
    },
    employmentType: {
        type: String,
        enum: ["full-time", "part-time", "contract", "internship", "temporary"],
        required: true,
    },
    applicants: { type: [Schema.Types.ObjectId], ref: "User", default: [] },
    experienceLevel: {
        type: String,
        enum: ["entry", "mid", "senior", "lead"],
        required: true,
    },
    joiningDate: { type: Date, required: true },
    status: {
        type: String,
        enum: ["open", "closed", "paused"],
        default: "open",
    },
    views: { type: Number, default: 0 },
    applicationClosingDate: { type: Date, required: true },
    tags: { type: [String], default: [] }
}, { timestamps: true });

export default mongoose.model<IJob>('Job', jobSchema);