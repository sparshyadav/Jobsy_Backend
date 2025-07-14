import { v2 as cloudinary } from 'cloudinary';
import { ENV_CONFIG } from './env';

cloudinary.config({
  cloud_name: ENV_CONFIG.cloudinaryName,
  api_key: ENV_CONFIG.cloudinaryApiKey,
  api_secret: ENV_CONFIG.cloudinaryApiSecret
});

export default cloudinary;
