import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid Email Address"),
  password: z.string().nonempty("Password is required"),
});
