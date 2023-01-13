import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { globalData } from '../App';

const Login = () => {
    const {setValidated} = useContext(globalData);
    const [credential, setCredential] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setCredential({ ...credential, [name]: value })
    }

    const verifyUser = (event) => {
            event.preventDefault();
            if (credential.username === "ResoluteAI" && credential.password === "Nitesh") {
                setValidated(true);
                navigate("/dashboard/addstudents");
            }
            else {
                alert("Please fill valid credentials")
            }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <Form noValidate onSubmit={verifyUser}>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={credential.username} name="username" onChange={handleSubmit} />
                    </Form.Group>
                </Row>
                <Row style={{ marginTop: "20px" }}>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={credential.password} name="password" onChange={handleSubmit}/>
                    </Form.Group>
                </Row>

                <Button style={{ marginTop: "20px",width:"25%" }} type="submit">Login</Button>

            </Form>
        </div>
    )
}

export default Login;