import axios from 'axios';
/** 
 * @param {*} fname First name 
 * @param {*} lname Last name
 * @param {*} username User email
 * @param {*} password User password
 * @description: This function pass the user input values fron UI to the server
 */

function userRegister(fname, lname, username, password) {
    axios.post('/registration',
        {
            firstName: fname,
            lastName: lname,
            email: username,
            password: password
        })
        .then(function (response) {
            // console.log("response after register", response.data);
            const token1 = response.data;
            const token2 = token1.substring(34)
            localStorage.setItem('verifyToken', token2);
            alert('Please check email to verify your email !!!');  
        })
        .catch(function (err) {
            console.log(err);
            alert('User with this Username already exists!!');
        });
}
function userLogin(username, password) {
    axios.post('/login',
        {
            email: username,
            password: password
        })
        .then(function (response) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', username);
            window.location.href = '/dashboard'
        })
        .catch(function (err) {
            console.log(err);
            alert('Login Unsuccessful.. Please Try Again!!');
        });
}

function userNewPassword(username) {
    axios.post('/newpassword',
        {
            email: username,
        })
        .then(function (response) {
            alert('Password changed successfully');
            window.location.href = '/login'
        })
        .catch(function (err) {
            console.log(err);
            alert('Password changed Unsuccessful.. Please Try Again!!');
        });
}

function checkToken(token) {
    console.log('63--inside check token---',token);
    
    axios.post(`/verifyEmail/${token}`,"",{ headers: {
        'token': token
    }})
        .then(function (response) {
            alert('User verified successfully');
            window.location.href = '/login'
        })
        .catch(function (err) {
            console.log(err);
            alert('User is not verified.. Please verify email!!');
        });
}

export { userRegister, userLogin, userNewPassword, checkToken }