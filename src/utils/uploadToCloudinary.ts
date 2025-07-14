import cloudinary from "../config/cloudinary";

export const uploadToCloudinary = async (
  fileBuffer: Buffer,
  folder: string
): Promise<{ url: string; public_id: string }> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error || !result) return reject(error || new Error("Upload failed"));
        resolve({ url: result.secure_url, public_id: result.public_id });
      }
    );
    stream.end(fileBuffer);
  });
};
