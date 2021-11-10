import { Link } from "react-router-dom";
function Login(){
    return(
        <>
        <div className="columns"><div className="column main"><input name="form_key" type="hidden" value="xcpFdshemaaOt8IR" />
<div className="login-container">
<div className="container">
<div className="main">
<div className="page-title-wrapper">
<h1 className="page-title">
    <span className="base">Login</span>
</h1>
<p>Welcome back! Please enter email and password</p>
</div>  
<div className="columns">
<div className="column main">
<div className="login-container">
<div className="block block-customer-login">
    <div className="block-title">
    </div>
    <div className="block-content" aria-labelledby="block-customer-login-heading">
        <form className="form form-login" action="https://www.metroshoes.net/customer/account/loginPost/referer/aHR0cHM6Ly93d3cubWV0cm9zaG9lcy5uZXQvbWVuLXNob2VzLmh0bWw%2C/" method="post" id="login-form" noValidate="novalidate">
            <input name="form_key" type="hidden" value="xcpFdshemaaOt8IR" />            <fieldset className="fieldset login" data-hasrequired="* Required Fields">
                <div className="field email required">
                    <label className="label" htmlFor="email"><span>Email</span></label>
                    <div className="control">
                        <input name="login[username]"  autoComplete="off" id="email" type="email" className="input-text" title="Email" data-validate="{required:true, 'validate-email':true}" aria-required="true" />
                    </div>
                </div>
                <div className="field password required">
                    <label htmlFor="pass" className="label"><span>Password</span></label>
                    <div className="control">
                        <input name="login[password]" type="password" autoComplete="off" className="input-text" id="pass" title="Password" data-validate="{required:true}" aria-required="true" />
                    </div>
                </div>
                <div className="actions-toolbar">
                <p>Not a user? <Link to="/register"> Register here</Link></p>
                    <div className="secondary"><a className="action remind" href="https://www.metroshoes.net/customer/account/forgotpassword/"><span className="forget">Forgot Your Password?</span></a></div>
                    <div className="primary"><button type="submit" className="action login primary" name="send" id="send2"><span>Login</span></button></div>
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
</div>
        </>
    );
}
export default Login;