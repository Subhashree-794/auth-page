import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style_up.css';

const Login = () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("")
    const HandleInput = (e) => {
        // const { name, value } = e.target;
        const value = e.target.value
        const name = e.target.name
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        const getData = JSON.parse(localStorage.getItem("user"));
        let userFound = false;
        for (let i = 0; i < getData.length; i++) {
            const currentUser = getData[i];
            if (currentUser.email === email && currentUser.password === password) {
                userFound = true;
                Navigate("/Home");
                break;
            }
        }

        if (!userFound) {
            return setMsg("Incorrect email or password.");
        }
    };
    return (
        <div>
            <div>
                <form onSubmit={HandleSubmit}>
                    <div>
                        <p>Login</p>
                    </div>
                    <div className='flex'>
                        <input type="email" name="email" placeholder="Enter your Email" onChange={HandleInput} />
                        <input type="password" name="password" placeholder="Enter your Password" onChange={HandleInput} />
                        <p>{msg}</p>
                        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                    </div>
                    <button type="submit">Login</button>
                </form>

            </div>
        </div>
    );
};

export default Login;
