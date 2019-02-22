import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Button } from "@material-ui/core";
import { userLogin }  from "../services/userService";
class LoginComponent extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            toast : false
        } 
    }
    handleusernameChange = (event) => {
        const username = event.target.value
        this.setState({ username: username })
    }
    handlepasswordChange = (event) => {
        const password = event.target.value
        this.setState({ password: password })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.username === "") {
            toast("Username cannot be empty",{position: toast.POSITION.BOTTOM_CENTER});
        }
        else if (this.state.password === "") {
            toast("Password cannot be empty",{position: toast.POSITION.BOTTOM_CENTER});
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) {
            toast("Invalid username",{position: toast.POSITION.BOTTOM_CENTER});
        }
        else if (this.state.password.length < 8) {
            toast("Password must be of atleast 8 characters long",{position: toast.POSITION.BOTTOM_CENTER});
        }
        else 
        {
            userLogin(this.state.username, this.state.password);
            this.setState({username:''})
            this.setState({password:''})
        }
    }
    register = (e) => {
        e.preventDefault();
        this.props.history.push('/registration');
    }
    forgetPass = (e) => {
        e.preventDefault();
        this.props.history.push('/forgetPassword');
    }
    render() {
        return (
            <div>
                <form id = 'loginForm'>
                <div>
                    <label><b>Username</b></label>
                    <input type="text" id= "username" placeholder="Enter useremail" name="username" value={this.state.username} onChange={this.handleusernameChange} style={{marginBottom:"20px"}}/>                     
                    <label ><b>Password</b></label>
                    <input type="password" id= "password"  placeholder="Enter password" name="password" value={this.state.password} onChange={this.handlepasswordChange} />                      
                    <div style={{paddingTop:"10px"}}>
                    <Button style=
                    {{
                        backgroundColor:"darkgreen",
                        color: "white",
                        padding: "10px 20px",
                        margin: "9px auto",
                        border: "none",
                        cursor: "pointer",
                        width: "100%",
                        boxAlign: "center"
                    }} type="submit" onClick={this.handleSubmit}>
                    <b>SIGN IN</b>
                     </Button>
                    
                    <div style={{ display: "flex",padding:"50px", paddingTop:"20px", justifyContent:"space-between"}}>
                    <Button style={{backgroundColor:"burlywood"}} type="submit" onClick={this.register}>
                     <b>CREATE ACCOUNT</b>
                     </Button>
                    <Button style={{backgroundColor:"burlywood"}} type="submit" onClick={this.forgetPass}>
                    <b>FORGOT PASSWORD</b>
                    </Button>
                    </div>
                    </div>
                </div> 
                <ToastContainer/>    
                </form>                          
            </div>
        )
    } 
}

export default withRouter(LoginComponent);