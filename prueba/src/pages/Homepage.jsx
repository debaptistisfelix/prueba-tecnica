import { Link } from "react-router-dom";
export default function  Homepage(){
    return (
        <main className="main">
            <nav className="navbar">
                <Link className="nav-link" to="/signup">Signup</Link>
                <Link className="nav-link" to="/login">Login</Link>
            </nav>
            <div className="container">
            <h1>HOME</h1>
            </div>
        </main>
    )
}