import React from "react";
import { Input, Button, Form } from "antd";

const Login : React.FC = () => {
    return (
        
        <Form>
            <h3 style={{textAlign : 'center'}}>Login</h3>


            <Input placeholder="Login here" allowClear></Input>
            <Input placeholder="Password here" allowClear></Input>
        </Form>
    )
}

export default Login;