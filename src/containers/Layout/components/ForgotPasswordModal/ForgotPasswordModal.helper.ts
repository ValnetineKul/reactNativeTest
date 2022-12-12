import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  emailAddress: Yup.string().email().min(5).max(25).required(),
});

export enum ForgotPasswordFormFields {
  emailAddress = "emailAddress",
}

export const initialFormValues = {
  [ForgotPasswordFormFields.emailAddress]: "",
};

export const formHelper = [
  {
    id: ForgotPasswordFormFields.emailAddress,
    label: "Email Address",
    type: "text",
  },
];
