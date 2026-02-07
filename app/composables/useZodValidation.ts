import * as z from "zod";
export function useZodValidation() {
  const emailSchema = z.email();
  const passwordSchema = z.string().min(8);
  const mobileNumberSchema = z
    .string()
    .regex(/^\d{10}$/, "Enter Valid Mobile Number");
  return {
    emailSchema,
    passwordSchema,
    mobileNumberSchema,
  };
}

// const loginSchema = z.object({
//   email: z.email(),
//   password: z.string().length(8)
// });
