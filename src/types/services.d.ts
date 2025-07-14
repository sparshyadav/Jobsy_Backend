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
