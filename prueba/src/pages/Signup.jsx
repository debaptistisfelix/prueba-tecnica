import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpFOrm";
export default function  Signup(){
    return (
        <main className="main">
            <nav className="navbar">
                <Link className="nav-link" to="/signup">Signup</Link>
                <Link className="nav-link" to="/login">Login</Link>
            </nav>
            <div className="container">
                <SignUpForm/>
            </div>
       
            
        </main>
    )
}