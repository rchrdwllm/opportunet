import { suggestedJobs } from "@/constants/suggested-jobs";

export const getJob = (id: string) => {
  const job = suggestedJobs.find((job) => job.id === id);

  if (!job) {
    throw new Error("Job not found");
  }

  return job;
}
