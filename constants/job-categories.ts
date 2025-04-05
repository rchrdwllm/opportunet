import { JobCategory, JobCategoryEnum } from "@/types";
import { Laptop, UserPlus, Hammer, Accessibility, Building, GraduationCap, Armchair } from "lucide-react-native";
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

export const jobCategories: JobCategory[] = [
  {
    id: uuidv4(),
    category: JobCategoryEnum.REMOTE_FREELANCE,
    name: "Remote & Freelance Jobs",
    description: "Best for Persons with Disabilities, Senior Citizens, and Youth with limited mobility",
    Icon: Laptop,
    color: "orange",
  },
  {
    id: uuidv4(),
    category: JobCategoryEnum.PART_TIME_ENTRY_LEVEL,
    name: "Part-Time & Entry-Level Jobs",
    description: "Best for Youth, Marginalized Sectors, and Senior Citizens looking for flexible work",
    Icon: UserPlus,
    color: "blue",
  },
  {
    id: uuidv4(),
    category: JobCategoryEnum.SKILLED_LABOR_TRADE,
    name: "Skilled Labor & Trade Jobs",
    description: "Best for Marginalized Workers and Senior Citizens with trade skills",
    Icon: Hammer,
    color: "pink",
  },
  {
    id: uuidv4(),
    category: JobCategoryEnum.DISABILITY_INCLUSIVE,
    name: "Disability-Inclusive Jobs",
    description: "Specifically for Persons with Disabilities, ensuring accessibility & reasonable accommodations",
    Icon: Accessibility,
    color: "green",
  },
  {
    id: uuidv4(),
    category: JobCategoryEnum.GOVERNMENT_NONPROFIT,
    name: "Government & Nonprofit Jobs",
    description: "For those looking for public sector or community-driven work, including marginalized individuals",
    Icon: Building,
    color: "violet",
  },
  {
    id: uuidv4(),
    category: JobCategoryEnum.INTERNSHIPS_APPRENTICESHIPS,
    name: "Internships & Apprenticeships",
    description: "For Youth and Fresh Graduates looking to gain experience",
    Icon: GraduationCap,
    color: "red",
  },
  {
    id: uuidv4(),
    category: JobCategoryEnum.SENIOR_FRIENDLY,
    name: "Senior-Friendly Jobs",
    description: "For elderly workers who still want to contribute but need flexibility",
    Icon: Armchair,
    color: "indigo",
  },
];
