import { createJobService } from "../services/job.service";
import { jobValidation } from "../validations/job.validation";
import { Request, Response } from "express";

export const createJobController = async (req: Request, res: Response) => {
    jobValidation(req.body);

    const data = req.body;

    try {
        const newCompany = await createJobService(data);

        res.status(201).json({
            message: "Job created successfully",
            company: newCompany
        });
    } catch (error) {
        console.error("Error creating Job:", error);
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Something went wrong" });
        }
    }
};
