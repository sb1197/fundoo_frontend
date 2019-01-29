import React, { Component } from "react";
import RegisterComponent from "../components/registerComponent";
class Registration extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div style={{paddingLeft: "80px"}}>
                        <h1><b>USER REGISTRATION</b></h1>
                    </div>
                    <RegisterComponent />
                </form>
            </div>

        );
    }
}
export default Registration;   