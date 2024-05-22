import { Link } from "react-router-dom";

export default function Login(){
    const onSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
       
        <form action="#" onSubmit={onSubmit}>

            <h1 className="title">Login to your Account</h1>

            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>

            <button className="btn btn-block">Login</button>

            <p className="message">
                Not registered ? <Link to="/register">Create new Account</Link>
            </p>
        </form>
    );
}