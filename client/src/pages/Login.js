import { useRef, useState, useEffect } from "react";

function Login() {

    const emailRef = useRef();
    const pswrdRef = useRef();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [ emailFocus, setEmailFocus ] = useState(false);
    const [ passwordFocus, setPasswordFocus ] = useState(false);

    useEffect(() => {
        //sets focus to username input
        emailRef.current.focus();
    }, []); 

    useEffect(() => {
        //sets focus to username input
        emailRef.current.focus();
    }, [ email, password ]); 

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handlePswrdInput = (e) => setPassword(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)

    const content = 
    <>
    <form onSubmit={handleSubmit}>
        <label></label>
        <input 
        type="email" 
        placeholder="enter email"
        ref={emailRef}
        value={email}
        aria-describedby="emailLogin"
        onChange={handleEmailInput}/>
        <p id="emailLogin" className={ emailFocus ? "appear" : "offscreen" }>
            Please enter a username
        </p>
        <label></label>
        <input 
        type="password" 
        value={password}
        ref={pswrdRef}
        placeholder="enter password"
        onChange={handlePswrdInput}
        aria-describedby="passwordLogin"/>
        <p id="passwordLogin" className={ passwordFocus ? "appear" : "offscreen" }>
            Please enter a password
        </p>
        <button type="submit">Login</button>
    </form>
    </>;

    return content
}

export default Login;