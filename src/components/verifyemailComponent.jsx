import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { checkToken } from '../services/userService'
class VerifyEmailComponent extends Component 
{
    handleSubmit=()=>{
        const verify_token = localStorage.getItem('verifyToken');
        checkToken(verify_token);
    }
    render() {
        return (
            <div>
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
                    <b>GO TO LOGIN</b>
                     </Button>
                 </div>
            </div>
        )}
}

export default VerifyEmailComponent;