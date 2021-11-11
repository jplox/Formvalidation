import axios from 'axios'
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
export default userData;