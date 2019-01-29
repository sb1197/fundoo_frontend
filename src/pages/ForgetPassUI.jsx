import React, { Component } from "react";
import ForgotPassComponent from "../components/forgetComponent";
class ForgotPassword extends Component {
    render() {
        return (
            <div style={{ width: "500px", margin: "70px auto", border: "1px solid black", padding: "30px", paddingTop: "10px", backgroundColor: "floralwhite" }}>
                <div style={{ textAlign: "center", color: "green" }}>
                    <h1><b>Forgot Password</b></h1>
                </div>
                <div>
                    <ForgotPassComponent />
                </div>
            </div>
        );
    }
}
export default ForgotPassword;