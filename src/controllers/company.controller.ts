import { Request, Response } from "express";
import { createCompanyService } from "../services/company.service";
import { companyValidation } from "../validations/company.validations";

export const createCompanyController = async (req: Request, res: Response) => {
    console.log("REQUEST BODY: ", req.body.name, req.body.industry);
    companyValidation(req.body);

    const data = req.body;
    const file = req.file;

    try {
        const newCompany = await createCompanyService(data, file);

        res.status(201).json({
            message: "Company created successfully",
            company: newCompany
        });
    } catch (error) {
        console.error("Error creating company:", error);
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Something went wrong" });
        }
    }
};
