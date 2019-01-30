import axios from 'axios';
/** 
 * @param {*} fname First name 
 * @param {*} lname Last name
 * @param {*} username User email
 * @param {*} password User password
 * @description: This function pass the user input values fron UI to the server
 */

function userRegister(fname, lname, username, password) 
{
    axios.post('/registration',
    {
        firstName: fname,
        lastName: lname,
        email: username,
        password: password
    })
    .then(function (response) 
    {
        console.log("response after register",response); 
        window.location.href = '/verifyingEmail'
        // alert('Registered Successfully!!');     
    })
    .catch(function (err) {
        console.log(err);
        alert('User with this Username already exists!!');        
    });
    
}
function userLogin(username, password) 
{
    axios.post('/login',
    {
        email: username,
        password: password
    })
    .then( function (response) 
    {  
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('username',username);
        window.location.href = '/dashboard'
    })
    .catch(function (err) 
    {
        console.log(err);
        alert('Login Unsuccessful.. Please Try Again!!');
    });
}

function userNewPassword(username) 
{
    axios.post('/newpassword',
    {
        email: username,
    })
    .then( function (response) 
    {  
        alert('Password changed successfully');
        window.location.href = '/login'
    })
    .catch(function (err) 
    {
        console.log(err);
        alert('Password changed Unsuccessful.. Please Try Again!!');
    });
}

export { userRegister, userLogin, userNewPassword }