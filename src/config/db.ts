import mongoose from "mongoose";
import { ENV_CONFIG } from "./env";

const mongoUrl: string = ENV_CONFIG.mongoUrl as string;

export const connectDB = async (): Promise<void> => {
    try {
        if (!mongoUrl) {
            throw new Error(`Mongo URL not found in Environment Variables`);
        }

        await mongoose.connect(mongoUrl);
        console.log(`MongoDB Connection Established`);
    }
    catch (error) {
        console.error(`An Error Occured While Connecting to Database: ${error}`);
        process.exit(1);
    }
}