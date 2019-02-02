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

function checkToken(token) {
    console.log('63--inside check token---',token);
    axios.post(`/verifyEmail/${token}`,"",{ headers: {
        'token': token
    }})
        .then(function (response) {
            alert('User verified successfully');
            // window.location.href = '/login'
        })
        .catch(function (err) {
            console.log(err);
            alert('User is not verified.. Please verify email!!');
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

function forgetPassword(username) {
    axios.post('/verifyUser',
    {
        'email': username,
    })
    .then(function (response) {
        console.log('53--Inside forgetPassword response is--',response.data);
        const token1 = response.data;
        const token2 = token1.substring(34)
        localStorage.setItem('verifyUserToken', token2);
        alert('Password change link is send to valid email plz check..')
    })
    .catch(function (err) {
        console.log(err);
        alert('User Not Found..');
    });
}


function resetPassword(password,token) {
    console.log('83--inside reset paswd password--',password);
    console.log('84--inside reset paswd token--',token);
    
    axios.post(`/resetpassword/${token}`,{'password': password},{
     headers: {
        'token': token
    }})
    .then(function (response) {
        alert('Password changed successfully');
            window.location.href = '/login'
    })
    .catch(function (err) {
        console.log(err);
        alert('Password change Unsuccessful.. Please Try Again!!');
    });
}

export { userRegister, userLogin, forgetPassword, checkToken, resetPassword }