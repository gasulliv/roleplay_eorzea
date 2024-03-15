import { useRef, useState, useEffect } from "react";
import Axios from 'axios'

function SignUp() {
    const userRef = useRef();
    const emailRef = useRef();
    const pswrdRef = useRef();
    const [ userFocus, setUserFocus ] = useState(false);
    const [ emailFocus, setEmailFocus ] = useState(false);
    const [ passwordFocus, setPasswordFocus ] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        //sets focus to username input
        userRef.current.focus();
    }, []); 

    // useEffect(() => {
    //     //sets focus to username input
    //     userRef.current.focus();
    // }, [ userName, email, password ]); 

    const handleSubmit = (e) => {
        e.preventDefault()

        Axios.post('http://localhost:2222/auth/sign-up', {
            userName,
            email,
            password
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }

    const handleUserInput = (e) => setUserName(e.target.value)
    const handlePswrdInput = (e) => setPassword(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)

    const content = 
    <form onSubmit={handleSubmit}>
        <label></label>
        <input 
        type="text" 
        placeholder="enter username" 
        value= {userName}
        ref={userRef}
        aria-describedby="userSignup"
        onChange={ handleUserInput }/>
        <p id="userSignup" className={ userFocus ? "appear" : "offscreen" }>
            Please enter a username
        </p>
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
    </form>

    return content
}

export default SignUp;