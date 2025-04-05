import { LucideIcon } from "lucide-react-native";

export enum JobCategoryEnum {
  REMOTE_FREELANCE = 'remote-freelance',
  PART_TIME_ENTRY_LEVEL = 'part-time-entry-level',
  SKILLED_LABOR_TRADE = 'skilled-labor-trade',
  DISABILITY_INCLUSIVE = 'disability-inclusive',
  GOVERNMENT_NONPROFIT = 'government-nonprofit',
  INTERNSHIPS_APPRENTICESHIPS = 'internships-apprenticeships',
  SENIOR_FRIENDLY = 'senior-friendly',
}

export type JobCategory = {
  id: string;
  category: JobCategoryEnum;
  name: string;
  description: string;
  Icon: LucideIcon;
  color: any;
}

export type JobListing = {
  id: string;
  title: string;
  company: string;
  location: string;
  datePosted: Date;
  description: string;
  category: JobCategoryEnum;
  minSalary: number;
  maxSalary: number;
  employmentType: string;
  remote: boolean;
  responsibilities: string[];
  isSaved: boolean;
  isApplied: boolean;
  isFeatured: boolean;
  postedBy: string;
  image: string;
}
