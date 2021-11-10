import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios'

// schema for validation
const schema = yup.object().shape({
    firstname: yup.string().max(15).required("firstname is mandatory"),
    lastname: yup.string().max(15).required("lastname is mandatory"),
    email: yup.string().email().required(),
    mobile_no: yup.number().required("invalid Ph.num").positive(),
    password: yup.string().required().min(4).max(8),
    password_confirmation: yup.string().oneOf([yup.ref("password"), null]),
    tnc: yup.bool().oneOf([true], 'Accept Ts & Cs is required')
})
if(schema === true){

}
function Register() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const SubmitformData = (data) => {
        console.log(data)
        reset();
    }

    //post data
    function userData() {
        let firstnamedata = document.getElementById('firstname').value;
        let lastnamedata = document.getElementById('lastname').value;
        let emaildata = document.getElementById('email_address').value;
        let mobiledata = document.getElementById("mobile_no").value;
        let passworddata = document.getElementById('password').value;
        let confirmpasdata = document.getElementById('password-confirmation').value;

        axios.post('http://localhost:1109/user', {
            firstname: firstnamedata,
            lastname: lastnamedata,
            email: emaildata,
            mobile_no: mobiledata,
            password: passworddata,
            password_confirmation: confirmpasdata
        }).then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })

    }


    return (
        <>
            <div className="regcontainer">
                <div className="columns"><div className="column main"><input name="htmlFor_key" type="hidden" />
                    <div className="container">
                        <div className="main">
                            <div className="page-title-wrapper">
                                <h1 className="page-title">
                                    <span className="base">Create a new account</span>
                                </h1>
                                <p>Creating an account has many benefits: check out faster and more.</p>
                            </div>
                            <div className="columns">
                                <div className="column main">
                                    <div className="register-container">
                                        <div className="block block-customer-register">

                                            <form className="htmlFor create account htmlFor-create-account" method="" id="htmlFor-validate" encType="multipart/htmlFor-data" autoComplete="off" noValidate="novalidate" onSubmit={handleSubmit(SubmitformData)}>
                                                <input name="htmlFor_key" type="hidden" />
                                                <fieldset className="fieldset create info">
                                                    <input type="hidden" name="success_url" />
                                                    <input type="hidden" name="error_url" />

                                                    <div className="field field-name-firstname col-sm-24 col-xs-24 p-9 required">
                                                        <div className="htmlFor-group">
                                                            <label className="label" htmlFor="firstname"><span>First Name</span></label>
                                                            <div className="control">
                                                                <input type="text" id="firstname" name="firstname" title="First Name" className="htmlFor-control  validate-alpha input-text " autoComplete="off" aria-required="true" {...register('firstname')} />
                                                            </div>
                                                            <p className="errormessage"> {errors.firstname?.message} </p>
                                                        </div>
                                                    </div>
                                                    {/* firstname */}


                                                    <div className="field field-name-lastname col-sm-24 col-xs-24 p-9 required">
                                                        <div className="htmlFor-group">
                                                            <label className="label" htmlFor="lastname"><span>Last Name</span></label>
                                                            <div className="control">
                                                                <input type="text" id="lastname" name="lastname" title="Last Name" className="htmlFor-control validate-alpha  input-text " autoComplete="off" aria-required="true" {...register('lastname')} />
                                                            </div>
                                                            <p className="errormessage"> {errors.lastname?.message} </p>
                                                        </div>
                                                    </div>
                                                    {/* lastname */}
                                                </fieldset>


                                                <fieldset className="fieldset create account" data-hasrequired="* Required Fields">
                                                    <div className="field email required">
                                                        <label htmlFor="email_address" className="label"><span>Email</span></label>
                                                        <div className="control">
                                                            <input type="email" name="email" autoComplete="email" id="email_address" title="Email" className="input-text" data-validate="{required:true, 'validate-email':true}" aria-required="true" {...register('email')} />
                                                        </div>
                                                        <p className="errormessage"> {errors.email?.message} </p>
                                                    </div>
                                                    {/* email */}

                                                    <div className="field required">
                                                        <label htmlFor="mobile_no" className="label"><span>Mobile Number</span></label>
                                                        <div className="control">
                                                            <input type="tel" name="mobile_no" id="mobile_no" title="Mobile Number" className="input-text validate-numbe validate-number-range" data-validate="{required:true, 'validate-number':true, 'minlength':10, 'maxlength':10} " autoComplete="off" aria-required="true" {...register('mobile_no')} maxLength="10" pattern="[1-9]{1}[0-9]{9}" />
                                                        </div>
                                                        <p className="errormessage"> {errors.mobile_no && "invalid ph.num"} </p>
                                                    </div>
                                                    {/* number */}

                                                    <div className="field password required">
                                                        <label htmlFor="password" className="label"><span>Password</span></label>
                                                        <div className="control">
                                                            <input type="password" name="password" id="password" title="Password" className="input-text" data-password-min-length="8" data-password-min-character-sets="3" data-validate="{required:true, 'validate-customer-password':true}" autoComplete="off" aria-required="true" {...register('password')} />
                                                        </div>
                                                        <p className="errormessage"> {errors.password?.message} </p>
                                                    </div>

                                                    {/* password */}
                                                    <div className="field confirmation required">
                                                        <label htmlFor="password-confirmation" className="label"><span>Confirm Password</span></label>
                                                        <div className="control">
                                                            <input type="password" name="password_confirmation" title="Confirm Password" id="password-confirmation" className="input-text" data-validate="{required:true, equalTo:'#password'}" autoComplete="off" aria-required="true" {...register('password_confirmation')} />
                                                        </div>
                                                        <p className="errormessage"> {errors.password_confirmation && "check your password!!"}</p>
                                                    </div>

                                                    {/* confirm */}
                                                    <div className="tnccheckbox">
                                                        <input type="checkbox" id="fruit1" name="tnc" value="" {...register('tnc')} required />
                                                        <label htmlFor="fruit1">I accept the terms and conditions</label>
                                                        <p className="errormessage">{errors.tnc && "Agree terms and condition"}</p>
                                                    </div>
                                                    <div className="existuser">
                                                        <p>Already user? <Link to="/"> login here</Link></p>
                                                    </div>
                                                    <div className="actions-toolbar">
                                                        <div className="primary">
                                                            <button type="submit" className="action submit primary" title="Create an Account" onClick={userData}>Register</button>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Register;