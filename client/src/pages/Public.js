import { useRef, useState, useEffect } from "react";
import Axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';


function SignUp() {
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;
    const handleLogOut = () => {
        Axios.get('http://localhost:3000/auth/logout')
        .then(res=> {
            if(res.status = 200) {
                navigate('/login');
            }
        }).catch(err => {
            console.log(err);
        })
    }
    const content = 
    <div>
        <button><Link to ="/dashboard"/>Go to Dashboard</button>
        <br/>
        <br/>
        <button><Link to ="/login"/>Login here!</button>
    </div>
    return content
}

export default SignUp;