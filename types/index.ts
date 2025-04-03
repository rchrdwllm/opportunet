import { Laptop, LucideIcon } from "lucide-react-native";

export type JobCategory = {
  id: number;
  slug: string;
  name: string;
  description: string;
  Icon: LucideIcon;
  bgColor: string;
  fgColor: string;
  mutedColor: string;
  borderColor: string;
  iconBgColor: string;
}

export const jobCategories: JobCategory[] = [
  {
    id: 1,
    slug: "/remote-freelance-jobs",
    name: "Remote & Freelance Jobs",
    description: "Best for Persons with Disabilities, Senior Citizens, and Youth with limited mobility",
    Icon: Laptop,
    bgColor: "#FFF6ED",
    fgColor: "#652501",
    mutedColor: "#B28D77",
    borderColor: "#F0E1D5",
    iconBgColor: "#FFFDF8"
  }
]
