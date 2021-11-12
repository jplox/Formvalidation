import axios from 'axios';   // importing axios module . Axios is a library that serves to create HTTP requests that are present externally.

/**
 * @author:Ankith Rakesh
 * @description: This function gets all values from input field and stores to certain varibales and send the input values to backend(http://localhost:1109/)
 * 
 */
function userData() {
    let firstnamedata = document.getElementById('firstname').value; // firstname input field value is stored in variable(firstnamedata)
    let lastnamedata = document.getElementById('lastname').value;
    let emaildata = document.getElementById('email_address').value;
    let mobiledata = document.getElementById("mobile_no").value;
    let passworddata = document.getElementById('password').value;
    let confirmpasdata = document.getElementById('password-confirmation').value;

    axios.post('http://localhost:1109/', { //This is the location of database where we insert data 
        firstname: firstnamedata,
        lastname: lastnamedata,
        email: emaildata,
        mobile_no: mobiledata,
        password: passworddata,
        password_confirmation: confirmpasdata
    }).then((res) => {
        console.log(res.data) // response data
    }).catch((error) => {  // if post is unsuccessful then throw error
        console.log(error)
    })

}
export default userData;  // exporting userData function as default