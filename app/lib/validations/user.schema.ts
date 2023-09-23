import { z } from "zod";

export const RegisterUserSchema = z
  .object({
    firstName: z
      .string({
        required_error: "Name is required",
      })
      .min(1, "First name is required"),
    lastName: z
      .string({
        required_error: "Name is required",
      })
      .min(1, "Last name is required"),
    phoneNumber: z
      .string({
        required_error: "Phone number is required",
      })
      .min(1, "Phone number is required")
      .length(11, "Phone number must be 11 characters"),
    countryCode: z
      .string({
        required_error: "Country code is required",
      })
      .min(1, "Country code is required"),
    email: z
      .string({
        required_error: "Email is required",
      })
      .min(1, "Email is required")
      .email("Email is invalid"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
  })

export const LoginUserSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Email is invalid"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const ForgotUserPasswordSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Email is invalid"),
});

export const ResetUserPasswordSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    }),
  secretReference: z
    .string({
      required_error: "Secret Reference is required",
    }),
  token: z
    .string({
      required_error: "Token is required",
    })
    .min(1, "Token is required")
    .length(4, "Token must be 4 characters"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters"),
  comfirmPassword: z
    .string({
      required_error: "Confirm your password",
    })
    .min(1, "Confirm your password"),
})
.refine((data) => data.password === data.comfirmPassword, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});


const EmployeeSetup = z.object({
  bvn: z
    .string({
      required_error: "Bvn is required",
    })
    .min(1, "Bvn is required")
    .length(11, "Bvn must be 11 characters"),
  income: z
    .string({
      required_error: "Income is required",
    })
    .min(1, "Income is required"),
  state: z
    .string({
      required_error: "State is required",
    })
    .min(1, "State is required"),
  homeAddress: z
    .string({
      required_error: "Address is required",
    })
    .min(1, "Address is required"),
  validIdFormat: z
    .string({
      required_error: "identity format is required",
    })
    .min(1, "identity format is required"),
  validIdNumber: z
    .string({
      required_error: "Valid document number is required",
    })
    .min(1, "Valid document number is required"),
  validIdUpload: z
    .instanceof(File)
    .refine((value) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      return allowedTypes.includes(value.type);
    }, {
      message: 'Invalid file type. Allowed types: jpeg, png, pdf'
    })
    .refine((value) => value.size <= 5242880, {  // 5 MB
      message: 'File size exceeds the limit of 5 MB'
    })
});
export const EmployeeSchema = z.object({
  // accountType: z
  //   .string({
  //     required_error: "Account Type is required",
  //   }),
  setup: EmployeeSetup
})

const StudentSetup = z.object({
  bvn: z
    .string({
      required_error: "Bvn is required",
    })
    .min(1, "Bvn is required")
    .length(11, "Bvn must be 11 characters"),
  income: z
    .string({
      required_error: "Income is required",
    })
    .min(1, "Income is required"),
  state: z
    .string({
      required_error: "State is required",
    })
    .min(1, "State is required"),
  homeAddress: z
    .string({
      required_error: "Address is required",
    })
    .min(1, "Address is required"),
  validIdFormat: z
    .string({
      required_error: "identity format is required",
    })
    .min(1, "identity format is required"),
  validIdNumber: z
    .string({
      required_error: "Valid document number is required",
    })
    .min(1, "Valid document number is required"),
  validIdUpload: z
    .instanceof(File)
    .refine((value) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      return allowedTypes.includes(value.type);
    }, {
      message: 'Invalid file type. Allowed types: jpeg, png, pdf'
    })
    .refine((value) => value.size <= 5242880, {  // 5 MB
      message: 'File size exceeds the limit of 5 MB'
    })
});
export const StudentSchema = z.object({
  accountType: z
    .string({
      required_error: "Account Type is required",
    }),
  setup: StudentSetup
})


export type LoginUserInput = z.infer<typeof LoginUserSchema>;
export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
export type ForgotUserPasswordInput = z.infer<typeof ForgotUserPasswordSchema>;
export type ResetUserPasswordInput = z.infer<typeof ResetUserPasswordSchema>;

export type EmployeeInput = z.infer<typeof EmployeeSchema>;
export type StudentInput = z.infer<typeof StudentSchema>;
