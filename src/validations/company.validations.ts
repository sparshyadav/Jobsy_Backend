import { companyData } from "../types/services";

export const companyValidation = (data: companyData) => {
    const { name, website, industry, size, linkedIn, twitter, facebook } = data;

    if (!name || !industry) {
        throw new Error('Name and industry are required');
    }

    const allowedIndustries = ["Software", "Finance", "Healthcare", "Education", "Retail", "Marketing", "Other"];
    if (!allowedIndustries.includes(industry)) {
        throw new Error('Invalid industry value');
    }

    if (size) {
        const allowedSizes = ["1-50", "51-500", "501-2500", "2501-5000", "5001+"];
        if (!allowedSizes.includes(size)) {
            throw new Error('Invalid company size');
        }
    }

    if (website && typeof website === 'string') {
        const urlRegex = /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/([\w/_-]+))*\/?$/;
        if (!urlRegex.test(website)) {
            throw new Error('Invalid website URL');
        }
    }

    const urlRegex = /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/([\w/_-]+))*\/?$/;

    if (linkedIn && typeof linkedIn === 'string' && !urlRegex.test(linkedIn)) {
        throw new Error('Invalid LinkedIn URL');
    }
    if (twitter && typeof twitter === 'string' && !urlRegex.test(twitter)) {
        throw new Error('Invalid Twitter URL');
    }
    if (facebook && typeof facebook === 'string' && !urlRegex.test(facebook)) {
        throw new Error('Invalid Facebook URL');
    }
};
