import { useRef, useState, useEffect } from "react";
import Axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

function ForgotPassword() {

    const emailRef = useRef();
    const [ emailFocus, setEmailFocus ] = useState(false);
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        //sets focus to username input
        emailRef.current.focus();
    }, []); 

    Axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:2222/auth/forgot-password', {
            email,
        }).then(response => {
            if(response.data) {
                alert('email sent successfully!')
                navigate('/login');
            }
        }).catch(err => {
            console.log(err);
        })
    }
    
    const handleEmailInput = (e) => setEmail(e.target.value)

    const content = 
    <form onSubmit={handleSubmit}>
        <label>Forgot Password</label>
        <input 
        type="email" 
        placeholder="enter email" 
        value={email} 
        ref={emailRef}
        aria-describedby="emailSignup"
        onChange={handleEmailInput}/>
        <p id="emailSignup" className={emailFocus ? "appear" : "offscreen"}>
            Please enter an email
        </p> 
        <button type="submit">Send Password Reset</button>   
    </form>

    return content
}

export default ForgotPassword;