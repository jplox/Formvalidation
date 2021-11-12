import * as yup from "yup"; //importing yup module

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; // mobile number regex
const nameRegExp = /^[a-zA-Z]*$/g; // name regex allows only alphabets
//Defining a schema. schema where all the form validation part is done
export const schema = yup.object().shape({
  firstname: yup
    .string()
    .max(10)
    .required("firstname is mandatory")
    .matches(nameRegExp), //Should be of string type and allows maximum 10 character and it should match with the nameRegExp
  lastname: yup
    .string()
    .max(10)
    .required("lastname is mandatory")
    .matches(nameRegExp),
  email: yup.string().email().required("").matches(),
  mobile_no: yup.string().required().matches(phoneRegExp).min(10).max(10),
  password: yup.string().required("Please Enter your password").min(4).max(8),
  password_confirmation: yup.string().oneOf([yup.ref("password"), null]), // refering password field
  tnc: yup.bool().oneOf([true], "Accept Ts & Cs is required"),
});
