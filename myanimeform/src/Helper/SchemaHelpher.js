import * as yup from 'yup';

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const nameRegExp = /^[a-zA-Z]*$/g;



export const schema = yup.object().shape({
        firstname: yup.string().max(10).required("firstname is mandatory").matches(nameRegExp),
        lastname: yup.string().max(10).required("lastname is mandatory").matches(nameRegExp),
        email: yup.string().email().required("").matches(),
        mobile_no: yup.string().required().matches(phoneRegExp).min(10).max(10),
        password: yup.string().required().min(4).max(8),
        password_confirmation: yup.string().oneOf([yup.ref("password"), null]),
        tnc: yup.bool().oneOf([true], 'Accept Ts & Cs is required')
    })

