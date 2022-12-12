import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().min(5).max(25).required(),
  emailAddress: Yup.string().email().min(5).max(25).required(),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string()
    .min(8)
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export enum SignUpFormFields {
  fullName = "fullName",
  emailAddress = "emailAddress",
  password = "password",
  confirmPassword = "confirmPassword",
}

export const initialFormValues = {
  [SignUpFormFields.fullName]: "",
  [SignUpFormFields.emailAddress]: "",
  [SignUpFormFields.password]: "",
  [SignUpFormFields.confirmPassword]: "",
};

export const formHelper = [
  {
    id: SignUpFormFields.fullName,
    label: "Full name",
    type: "text",
  },
  {
    id: SignUpFormFields.emailAddress,
    label: "Email Address",
    type: "text",
  },
  {
    id: SignUpFormFields.password,
    label: "Password",
    type: "password",
  },
  {
    id: SignUpFormFields.confirmPassword,
    label: "Confirm Password",
    type: "password",
  },
];
