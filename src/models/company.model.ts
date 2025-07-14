import mongoose, { Schema } from 'mongoose';
import { ICompany } from '../types/models';

const companySchema: Schema<ICompany> = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  industry: {
    type: String,
    enum: ["Software", "Finance", "Healthcare", "Education", "Retail", "Marketing", "Other"],
    required: true
  },
  location: {
    type: String,
    trim: true
  },
  logo: {
    type: String
  },
  size: {
    type: String,
    enum: ["1-50", "51-500", "501-2500", "2501-5000", "5001+"]
  },
  foundedBy: {
    type: String
  },
  socialLinks: {
    linkedIn: { type: String, trim: true },
    twitter: { type: String, trim: true },
    facebook: { type: String, trim: true }
  },
  jobsPosted: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    default: []
  }]
}, { timestamps: true });

export default mongoose.model<ICompany>('Company', companySchema);
