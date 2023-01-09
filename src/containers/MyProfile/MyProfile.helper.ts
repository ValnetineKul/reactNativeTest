import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(25),
  lastName: Yup.string().min(2).max(25),
  emailAddress: Yup.string().email().min(5).max(25),
  city: Yup.string(),
  street: Yup.string(),
  flat: Yup.string(),
});

export enum MyProfileFields {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  city = "city",
  street = "street",
  flat = "flat",
}

export const formHelper = [
  {
    id: MyProfileFields.firstName,
    label: "First name",
    type: "text",
  },
  {
    id: MyProfileFields.lastName,
    label: "Last name",
    type: "text",
  },
  {
    id: MyProfileFields.email,
    label: "Email",
    type: "text",
  },
  {
    id: MyProfileFields.city,
    label: "City",
    type: "text",
  },
  {
    id: MyProfileFields.street,
    label: "Locality, area or street",
    type: "text",
  },
  {
    id: MyProfileFields.flat,
    label: "Flat no., Building name",
    type: "text",
  },
];
