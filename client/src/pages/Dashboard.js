import Axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Dashboard() {

    const [users, setUsers] = useState("");

    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;
    useEffect( () => {
        Axios.get('http://localhost:2222/auth/verify')
        .then(res => {
            console.log(res)
            if (res.status = 200) {
                console.log(res)
            } else {
                navigate('/');
            }
        })
    }, [])

    const handleLogOut = () => {
        Axios.get('http://localhost:2222/auth/logout')
        .then(res=> {
            if(res.status = 200) {
                navigate('/login');
            }
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        Axios.get('http://localhost:2222/auth/current-user')
        .then( res => {
            console.log(res)
        }
        )
        .catch(err => console.log(err));
    }, [])

    const content = 
    <div>
    <h1>Hello</h1>
    <div>
        {/* {
            users.map( user => {
                <p>

                </p>
            })
        } */}
    </div>
    <button onClick={handleLogOut}>Logout here!</button>
    </div>
    return content
}

export default Dashboard;