"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { createJobSchema, CreateJobType } from "@/utils/types"; 
import { CustomFormField } from "./FormComponents";

export default function CreateJobForm() {
  const form = useForm<CreateJobType>({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
    },
  });

  function onSubmit(values: CreateJobType) {
    console.log("دیتای تمیز و ولیدیت شده برای ارسال به پریزما:", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CustomFormField
          name="position"
          label="Job Position"
          control={form.control}
          placeholder="e.g. Front-end Developer"
        />

        <CustomFormField
          name="company"
          label="Company Name"
          control={form.control}
          placeholder="e.g. Google"
        />

        <CustomFormField
          name="location"
          label="Location"
          control={form.control}
          placeholder="e.g. Remote / Tehran"
        />

        <Button type="submit">Submit Job</Button>
      </form>
    </Form>
  );
}
