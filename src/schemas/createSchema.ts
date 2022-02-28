import * as yup from "yup";
import bcrypt from "bcryptjs";

export const userSchema = yup.object().shape({
  primaryName: yup.string().required("primaryName is required"),
  lastName: yup.string().required("lastName is required"),
  email: yup
    .string()
    .email("Invalid email format.")
    .required("email is required"),
  cpf: yup
    .string()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "invalid cpf format")
    .required("cpf is required"),
  birthDate: yup
    .string()
    .matches(
      /^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/,
      "invalid birthDate format"
    )
    .required("birthDate is required"),
  password: yup
    .string()
    .required("password is required")
    .transform((_, originalValue) => {
      return bcrypt.hashSync(originalValue, 10);
    }),
  address: yup.object().shape({
    zipCode: yup
      .string()
      .matches(/^\d{8}$/, "invalid zipCode format")
      .required("zipCode is required"),
    publicPlace: yup.string().required("publicPlace is required"),
    complement: yup.string(),
    district: yup.string().required("district is required"),
    city: yup.string().required("city is required"),
    state: yup
      .string()
      .matches(
        /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO|BR)$/,
        "invalid state format"
      )
      .required("state is required"),
  }),
});
