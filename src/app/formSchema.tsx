import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  number: z.string().regex(/^\d{10}$/, {
    message: "Please enter a valid number.",
  }),
  employeeId: z.string().length(6, {
    message: "Please enter a valid employee ID.",
  }),
  department: z.string().min(2, {
    message: "Please select a department.",
  }),
  dateOfJoining: z.date({
    required_error: "Please enter a valid date.",
  }),
  role: z.string().min(2, {
    message: "Please enter a valid role.",
  }),
});

export default formSchema;
