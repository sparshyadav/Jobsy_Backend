import { JobData } from "../types/services";
import Job from '../models/job.model';
import Company from '../models/company.model';

export const createJobService = async (data: JobData) => {
    const { title, description, requirements, skillsRequired, company, postedBy, location, salary, department, workMode, employmentType, applicants, experienceLevel, joiningDate, status, applicationClosingDate, tags } = data;

    const job = new Job({
        title,
        description,
        requirements,
        skillsRequired,
        company,
        postedBy,
        location,
        salary,
        department: department.toLowerCase(),
        workMode: workMode.toLowerCase(),
        employmentType: employmentType.toLowerCase(),
        applicants,
        experienceLevel: experienceLevel.toLowerCase(),
        joiningDate,
        status,
        applicationClosingDate,
        tags
    });

    const savedJob = await job.save();

    await Company.findByIdAndUpdate(
        company,
        { $push: { jobsPosted: savedJob._id } },
        { new: true }
    );

    const populatedJob = await Job.findById(savedJob._id).populate("company", "name logo industry location");

    return populatedJob;
}

export const getAllJobs=async()=>{
    
}