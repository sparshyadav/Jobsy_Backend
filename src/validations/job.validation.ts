import { JobData } from "../types/services";

export const jobValidation = (data: JobData): void => {
    if (!data.title) {
        throw new Error('Job Title is Required');
    }

    if (!data.description) {
        throw new Error('Job Description is Required');
    }

    if (!data.company) {
        throw new Error('Job Company is Required');
    }

    if (!data.postedBy) {
        throw new Error('Job PostedBy is Required');
    }

    if (!data.location) {
        throw new Error('Job Location is Required');
    }

    if (!data.salary) {
        throw new Error('Job Salary is Required');
    }

    const departments = ["engineering", "marketing", "design", "sales", "hr", "product"];
    if (!departments.includes(data.department.toLowerCase())) {
        throw new Error('Job Department is Required');
    }

    const workModes = ["remote", "onsite", "hybrid"];
    if (!workModes.includes(data.workMode.toLowerCase())) {
        throw new Error('Job Work Mode is Required');
    }

    const employmentTypes = ["full-time", "part-time", "contract", "internship", "temporary"];
    if (!employmentTypes.includes(data.employmentType.toLowerCase())) {
        throw new Error('Job Employment Type is Required');
    }

    const experienceLevels = ["entry", "mid", "senior", "lead"];
    if (!experienceLevels.includes(data.experienceLevel.toLowerCase())) {
        throw new Error('Job Experience Level is Required');
    }

    if (!data.joiningDate) {
        console.log("JOINING DATE: ", data.joiningDate);
        throw new Error('Job Joining Date is Required');
    }

    if (!data.applicationClosingDate) {
        throw new Error('Job Application Closing Time is Required');
    }
};
