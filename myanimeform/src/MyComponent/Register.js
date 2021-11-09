function Register(){
    return(
        <>
         <div className="columns"><div className="column main"><input name="htmlFor_key" type="hidden"  />




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

<htmlFor className="htmlFor create account htmlFor-create-account"  method="post" id="htmlFor-validate" enctype="multipart/htmlFor-data" autoComplete="off" novalidate="novalidate">
    <input name="htmlFor_key" type="hidden"  />    <fieldset className="fieldset create info">
        <input type="hidden" name="success_url" />
        <input type="hidden" name="error_url"  />

        

            <div className="field field-name-firstname col-sm-24 col-xs-24 p-9 required">
        <div className="htmlFor-group">
            <label className="label" htmlFor="firstname"><span>First Name</span></label>
            <div className="control">
                <input type="text" id="firstname" name="firstname" title="First Name" className="htmlFor-control  validate-alpha input-text " autoComplete="off" aria-required="true" />
            </div>
        </div>
        </div>
            <div className="field field-name-lastname col-sm-24 col-xs-24 p-9 required">
        <div className="htmlFor-group">
            <label className="label" htmlFor="lastname"><span>Last Name</span></label>
            <div className="control">
                <input type="text" id="lastname" name="lastname" title="Last Name" className="htmlFor-control validate-alpha  input-text " autoComplete="off" aria-required="true" />
            </div>
        </div>    
        </div>
    
            
    </fieldset>

                
    <fieldset className="fieldset create account" data-hasrequired="* Required Fields">
        <div className="field email required">
            <label htmlFor="email_address" className="label"><span>Email</span></label>
            <div className="control">
                <input type="email" name="email" autoComplete="email" id="email_address" title="Email" className="input-text" data-validate="{required:true, 'validate-email':true}" aria-required="true" />
            </div>
        </div>

      
        <div className="field required">
            <label htmlFor="mobile_no" className="label"><span>Mobile Number</span></label>
            <div className="control">
                <input type="text" name="mobile_no" id="mobile_no" title="Mobile Number" className="input-text validate-numbe validate-number-range" data-validate="{required:true, 'validate-number':true, 'minlength':10, 'maxlength':10} " autoComplete="off" aria-required="true" />
            </div>
        </div>
      

        <div className="field password required">
            <label htmlFor="password" className="label"><span>Password</span></label>
            <div className="control">
                <input type="password" name="password" id="password" title="Password" className="input-text" data-password-min-length="8" data-password-min-character-sets="3" data-validate="{required:true, 'validate-customer-password':true}" autoComplete="off" aria-required="true" />
            </div>
        </div>
        <div className="field confirmation required">
            <label htmlFor="password-confirmation" className="label"><span>Confirm Password</span></label>
            <div className="control">
                <input type="password" name="password_confirmation" title="Confirm Password" id="password-confirmation" className="input-text" data-validate="{required:true, equalTo:'#password'}" autoComplete="off" aria-required="true" />
            </div>
        </div>


        

      
    
        <div className=" field tnc">
        <input type="checkbox" name="terms" id="tnc" data-validate="{required:true}" />
        <label className="checkbox-btn" htmlFor="tnc" >
            <span>I accept the terms and condition</span>
        </label>
        </div>
    
        <div className="actions-toolbar">
        <div className="primary">
            <button type="submit" className="action submit primary" title="Create an Account"><span>Register</span></button>
        </div>
    </div>
    </fieldset>
</htmlFor>

</div>
</div>
</div>
</div>
</div>
</div>




</div></div>
    
        </>
    );
}

export default Register;