import React, { Component } from "react";
import { Button } from "@material-ui/core";
class VerifyEmailComponent extends Component 
{
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