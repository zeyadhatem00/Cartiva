import * as z from "zod";

export const resetSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid Email Address"),
  newPassword: z
    .string()
    .nonempty("Password is required")
    .regex(
      /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/,
      "Min 8 Characters and Must have at least one uppercase letter and one special character ",
    ),
});
