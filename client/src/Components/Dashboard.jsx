import Axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;
    useEffect(()=>{
        Axios.get('http://localhost:5000/auth/verify')
        .then(res=>{
            if(res.data.status){
                alert("Welcome to Dashboard")
            }else{
                navigate('/home')
            }
            console.log(res);
        })
    },[])
    return (
    <div>
        <h1>Dashboard</h1>
    </div>
);
}

export default Dashboard
