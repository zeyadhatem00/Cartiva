import * as z from "zod";

export const ChangepassSchema = z
  .object({
    currentPassword: z.string().nonempty("Old Password required"),
    password: z
      .string()
      .nonempty("Password is required")
      .regex(
        /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/,
        "Min 8 Characters and Must have at least one uppercase letter and one special character ",
      ),
    rePassword: z.string().nonempty("rePassword is required"),
  })
  .refine((data) => data.password == data.rePassword, {
    path: ["rePassword"],
    message: "Password Should Match the New one ",
  });
