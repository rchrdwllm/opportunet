import { LucideIcon } from "lucide-react-native";

export type JobCategory = {
  id: number;
  slug: string;
  name: string;
  description: string;
  Icon: LucideIcon;
  color: any;
}

export type JobListing = {
  id: number;
  slug: string;
  title: string;
  poster: string;
  posterImg: string;
  location: string;
  company: string;
  date: Date;
  isApplied: boolean;
  caption: string;
  color: string;
}
