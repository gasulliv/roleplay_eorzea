import { useRef, useState, useEffect } from "react";
import Axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

function Login() {

    const emailRef = useRef();
    const pswrdRef = useRef();
    const [ emailFocus, setEmailFocus ] = useState(false);
    const [ passwordFocus, setPasswordFocus ] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        //sets focus to username input
        emailRef.current.focus();
    }, []); 

    // useEffect(() => {
    //     //sets focus to username input
    //     userRef.current.focus();
    // }, [ userName, email, password ]); 
    Axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()

        Axios.post('http://localhost:2222/auth/login', {
            email: email,
            password: password
        }).then(response => {
            console.log(email);
            if(response.status = 200) {
                const user = email;
                localStorage.setItem('user', JSON.stringify(user));
                console.log(user);
                navigate('/dashboard');
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const handlePswrdInput = (e) => setPassword(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)

    const content = 
    <form onSubmit={handleSubmit}>
        <label></label>
        <input 
        type="email" 
        placeholder="enter email" 
        value={email} 
        ref={emailRef}
        aria-describedby="emailSignup"
        onChange={ handleEmailInput }/>
        <p id="emailSignup" className={ emailFocus ? "appear" : "offscreen" }>
            Please enter an email
        </p>    
        <label></label>
        <input 
        type="password" 
        placeholder="enter password" 
        value={password} 
        ref={pswrdRef}
        area-describedby="pswrdSignup"
        onChange={ handlePswrdInput }/>
        <p id="pswrdSignup" className={ passwordFocus ? "appear" : "offscreen" }>
            Please enter a password
        </p> 
        <button type="submit">Sign Up</button>
        <p>
            <Link to="/sign-up">Need an account?</Link>
        </p>
        <p>
            <Link to="/forgot-password">Forgot Password?</Link>
        </p>
    </form>

    return content
}

export default Login;