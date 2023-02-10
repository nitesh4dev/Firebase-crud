import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalData } from '../App';

const Login = () => {
    const [inputs, setInputs] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputs({ ...inputs, [name]: value })
    }

    const verifyUser = (event) => {
            event.preventDefault();
            if (inputs.username === "ResoluteAI" && inputs.password === "Nitesh") {
                localStorage.setItem("isLoggedIn",true);
                navigate("/dashboard/home");
            }
            else {
                alert("Please fill valid credentials")
            }
    }

    return (
        <div className="login">
            <h1>Login</h1>
           <form onSubmit={verifyUser}>
                   <input type="text" placeholder='Enter Username' name='username' value={inputs.username} onChange = {handleChange} />
                   <input type="password" placeholder='Enter Password' name='password' value={inputs.password} onChange = {handleChange} />
                   <input type="submit" />
           </form>
        </div>
    )
}

export default Login;