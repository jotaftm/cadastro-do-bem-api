import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  confirmed: yup.boolean().required("confirmed is required"),
});
