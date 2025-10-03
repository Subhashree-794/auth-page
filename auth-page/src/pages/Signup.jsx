import React, { useState } from 'react'
import './style_up.css';
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const userDetail = {
        name: "",
        email: "",
        password: ""
    }
    const [data, setData] = useState(userDetail)
    const Navigate = useNavigate();
    const HandleInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        setData({ ...data, [name]: value })
    }
    const HandleSubmit = (e) => {
        e.preventDefault()

        if (data.name == "" || data.email == "" || data.password == "") {
            alert("Please Enter Unfilled Data !")
        } else {
            const getData = JSON.parse(localStorage.getItem("user") || "[]");
            let userFound = false;
            for (let i = 0; i < getData.length; i++) {
                const currentUser = getData[i];
                if (currentUser.email === data.email || currentUser.password === data.password) {
                    alert("Email or Password already exists ! ");
                    userFound = true;
                    break;
                }
            }
            if (!userFound) {
                let arr = []
                arr = [...getData]
                arr.push(data)
                localStorage.setItem("user", JSON.stringify(arr))
                Navigate("/Home")
            }
        }
    }
    return (
        <div>
            <div>
                <form onSubmit={HandleSubmit}>
                    <div>
                        <p>Sign Up</p>
                    </div>
                    <div className='flex'>
                        <input type="text" name="name" placeholder='Enter your Name' onChange={HandleInput} />
                        <input type="email" name='email' placeholder='Enter your Email' onChange={HandleInput} />
                        <input type="password" name='password' placeholder='Enter your Password' onChange={HandleInput} />
                        <p>Already have an account ? <a href="/login">Login</a> </p>
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup

