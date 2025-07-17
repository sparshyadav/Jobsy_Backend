export interface signupData {
  fullName: string;
  email: string;
  password: string;
  role: string;
}

export interface loginData {
  email: string;
  password: string;
}

export interface companyData {
  name: string;
  description?: string;
  website?: string;
  industry: "Software" | "Finance" | "Healthcare" | "Education" | "Retail" | "Marketing" | "Other";
  location?: string;
  logo?: string;
  size?: "1-50" | "51-500" | "501-2500" | "2501-5000" | "5001+";
  foundedBy?: string;
  linkedIn?: string;
  twitter?: string;
  facebook?: string;
}

export interface JobData {
  title: string;
  description: string;
  requirements?: string[];
  skillsRequired?: string[];
  company: string; 
  postedBy: string; 
  location: string;
  salary: string;
  department: "engineering" | "marketing" | "design" | "sales" | "hr" | "product";
  workMode: "remote" | "onsite" | "hybrid";
  employmentType: "full-time" | "part-time" | "contract" | "internship" | "temporary";
  applicants?: string[]; 
  experienceLevel: "entry" | "mid" | "senior" | "lead";
  joiningDate: Date;
  status?: "open" | "closed" | "paused";
  views?: number;
  applicationClosingDate: Date;
  tags?: string[];
}
