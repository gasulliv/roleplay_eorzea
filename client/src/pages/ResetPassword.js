import { useRef, useState, useEffect } from "react";
import Axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom';

function ResetPassword() {

    const pswrdRef = useRef();
    const [ pswrdFocus, setPswrdFocus ] = useState(false);
    const [password, setPassword] = useState("");
    const {token} = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        //sets focus to username input
        pswrdRef.current.focus();
    }, []); 

    Axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        // e.preventDefault()
        Axios.post('http://localhost:2222/auth/reset-password/' + token, {
            password,
        }).then(response => {
            if(response.status = "200") {
                navigate('/login');
                console.log(response.data)
            }
        }).catch(err => {
            console.log(err);
        })    
    }

    const handlePswrdInput = (e) => setPassword(e.target.value)

    const content = 
    <form onSubmit={handleSubmit}>
        <label>New Password</label>
        <input 
        type="password" 
        placeholder="enter new password" 
        value={password} 
        ref={pswrdRef}
        aria-describedby="newPassword"
        onChange={ handlePswrdInput }/>
        <p id="newPassword" className={ pswrdFocus ? "appear" : "offscreen" }>
            Please enter a new password
        </p> 
        <button type="submit">Reset Password</button>   
    </form>

    return content
}

export default ResetPassword;