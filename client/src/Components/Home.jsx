import Axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  Axios.defaults.withCredentials = true;
  const handleLogout = ()=> {
    console.log("handle called");
    Axios.get('http://localhost:5000/auth/logout')
    .then(res =>{
      if(res.data.status){
        navigate('/login')
      }
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className='home'>
    <h1>Home Page</h1>
    <button ><Link to="/dashboard">Dashboard</Link></button>
    <br />
    <br />
    <br />
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home;
