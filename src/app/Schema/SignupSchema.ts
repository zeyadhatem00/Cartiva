import * as z from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .nonempty("Name is required")
      .min(3, "Name must be at least 3 characters long"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid Email Address"),
    password: z
      .string()
      .nonempty("Password is required")
      .regex(
        /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/,
        "Min 8 Characters and Must have at least one uppercase letter and one special character ",
      ),
    rePassword: z.string().nonempty("rePassword is required"),
    phone: z
      .string()
      .nonempty("Phone is required")
      .regex(/^01[1250][0-9]{8}$/, "Enter a valid Egyption number"),
  })
  .refine((data) => data.password == data.rePassword, {
    message: "Password did not match",
    path: ["rePassword"],
  });
