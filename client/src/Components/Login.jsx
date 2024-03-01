import React, { useState } from 'react'
import "../App.css";
import  Axios  from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;
    const handleSubmit = (e)=>{
        e.preventDefault();
        Axios.post('http://localhost:5000/auth/login',{
            email,
            password
        }).then((response)=>{
            if(response.data.status){
                navigate('/home')
            }else{
                alert("User Not registered")
            }
            
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })

    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
            <h2>Login</h2>

            <label htmlFor='email'>Email :</label>
            <input type='email' autoComplete='off' placeholder='Email'
                onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor='password'>Password :</label>
            <input type='password' autoComplete='off' placeholder='Password'
                onChange={(e) => setPassword(e.target.value)} />

            <button type='submit'>Login</button>
            <br />
            <br />
            <Link to="/forgotpassword">Forgot Password</Link>
            <br />
            <br />
            <p>Don't Have Account :<Link to="/signup">Sign Up</Link></p>
            </form>

    </div>
);
}

export default Login
