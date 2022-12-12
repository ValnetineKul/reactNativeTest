import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  emailAddress: Yup.string().email().min(5).max(25).required(),
  password: Yup.string().min(8).required(),
});

export enum LoginFormFields {
  emailAddress = "emailAddress",
  password = "password",
}

export const initialFormValues = {
  [LoginFormFields.emailAddress]: "",
  [LoginFormFields.password]: "",
};

export const formHelper = [
  {
    id: LoginFormFields.emailAddress,
    label: "Email Address",
    type: "text",
  },
  {
    id: LoginFormFields.password,
    label: "Password",
    type: "password",
  },
];
