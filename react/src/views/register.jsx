import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/contextProvider";

export default function Register(){
    const nameRef = useRef();
    const emailRef = userRef();
    const passwordRef = userRef();
    const passwordConfirmationRef = useRef();

    const {setUser, setToken} = useStateContext();
    
    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }

        axiosClient.post('/signup', payload)
            .then(({data}) => {
                setToken(data.token);
                setUser(data.user);
            })
            .catch((err) => {
                const res = err.response;
            
                if(res && res.status === 422){
                    console.log(res.data.errors);
                }
            });
    }

    return (
       
        <form action="#" onSubmit={onSubmit}>

            <h1 className="title">Sign Up For Free</h1>
            <input type="text" ref={nameRef} placeholder="full name"/>

            <input type="email" ref={emailRef} placeholder="email"/>

            <input type="password" ref={passwordRef} placeholder="password"/>

            <input type="password" ref={passwordConfirmationRef} placeholder="re-password"/>

            <button className="btn btn-block">Sign Up</button>

            <p className="message">
                Already registered ? <Link to="/login">Sign In</Link>
            </p>
        </form>
    );
}