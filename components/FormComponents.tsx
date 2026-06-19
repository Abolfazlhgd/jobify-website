import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface CustomFormFieldProps<TFieldValues extends FieldValues = FieldValues> {
  name: FieldPath<TFieldValues>; // مپ کردن دقیق نام فیلدها بر اساس فرم
  label?: string;
  control: Control<TFieldValues>; // دریافت تایپ دقیق فُرم به جای any
  placeholder?: string;
  type?: string;
}

export function CustomFormField<
  TFieldValues extends FieldValues = FieldValues,
>({
  name,
  label,
  control,
  placeholder,
  type = "text",
}: CustomFormFieldProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className="capitalize">{label}</FormLabel>}
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
