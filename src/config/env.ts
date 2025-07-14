import dotenv from 'dotenv';
dotenv.config(); 

export const ENV_CONFIG = {
  port: process.env.PORT || 5000,
  mongoUrl: process.env.MONGO_URL || '',
  jwtSecret: process.env.JWT_SECRET || '',
  cloudinaryName: process.env.CLOUDINARY_NAME || '',
  cloudinaryApiKey: process.env.CLOUDINARY_KEY || '',
  cloudinaryApiSecret: process.env.CLOUDINARY_SECRET || ''
};
