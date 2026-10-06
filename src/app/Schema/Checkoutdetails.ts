import * as z from "zod";

export const CashoutSchema = z.object({
  details: z.string().nonempty("details Required"),
  phone: z
    .string()
    .nonempty("Phone number required")
    .regex(/^01[1250][0-9]{8}$/, "Enter a valid Egyption number"),
  city: z.string().nonempty("City Required"),
});
