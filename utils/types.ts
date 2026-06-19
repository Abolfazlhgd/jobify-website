import * as z from "zod";

// 1. Define Enums for Select fields
export enum JobStatus {
  Pending = "pending",
  Interview = "interview",
  Declined = "declined",
}

export enum JobMode {
  FullTime = "full-time",
  PartTime = "part-time",
  Internship = "internship",
  Remote = "remote",
}

// 2. Define the central Zod schema using z.enum()
export const createJobSchema = z.object({
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  // استفاده از مقادیر اعضای Enum به صورت آرایه برای z.enum
  status: z.enum([JobStatus.Pending, JobStatus.Interview, JobStatus.Declined], {
    message: "Please select a valid job status.",
  }),
  mode: z.enum([JobMode.FullTime, JobMode.PartTime, JobMode.Internship, JobMode.Remote], {
    message: "Please select a valid job mode.",
  }),
});

// 3. Extract the TypeScript type automatically
export type CreateJobType = z.infer<typeof createJobSchema>;