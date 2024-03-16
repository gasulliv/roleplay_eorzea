import Axios from 'axios'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;
    useEffect( () => {
        Axios.get('http://localhost:2222/auth/verify')
        .then(res => {
            console.log(res)
            if (res.status = 200) {

            } else {
                navigate('/');
            }
        })
    }, [])
    const content = 
    <h1>Hello!</h1>
    return content
}

export default Profile;