import { companyData } from "../types/services";
import Company from "../models/company.model";
import { v2 as cloudinary } from "cloudinary";

export const createCompanyService = async (data: companyData, file?: Express.Multer.File) => {
    let logoUrl: string | undefined = undefined;

    if (!file) {
        throw new Error('Upload Company Logo');
    }
    const upload = await cloudinary.uploader.upload(`data:${file.mimetype};base64,${file.buffer.toString('base64')}`, {
        folder: 'companies',
    });
    logoUrl = upload.secure_url;

    const links = {
        linkedIn: data.linkedIn,
        twitter: data.twitter,
        facebook: data.facebook
    }

    const newCompany = await Company.create({
        ...data,
        socialLinks: links,
        logo: logoUrl,
        jobsPosted: []
    });

    return newCompany;
};
