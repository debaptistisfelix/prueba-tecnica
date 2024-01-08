import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function getAuthConfig(){
    return {
        devideId: "6a2fad5e-79d6-4928-aa60-dbb87385b534",
    }
}

export default function  Login(){
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setUserIsLoggedIn(prev => !prev);
        Cookies.set('userIsLoggedIn', 'true');
    }

    const handleLogOut = () => {
        indigitall.logout((device)=>{
            console.log("logged out")
            handleLogin();
            Cookies.remove('userIsLoggedIn');
            navigate("/")
        }, (error)=>{
            console.log(error)
        });
    }

    useEffect(() => {
        const isLoggedIn = Cookies.get('userIsLoggedIn');
        if (isLoggedIn === 'true') {
            setUserIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        if(userIsLoggedIn){
            indigitall.getInbox({auth: getAuthConfig}, (inbox)=>{
                console.log(inbox) 
                console.log("inbox")
             }, (error)=>{
                console.log("errror")
                 console.log(error)
             });
        }
    }, [userIsLoggedIn])

    

   

    return (
        <main className="main">
            <nav className="navbar">
                <Link className="nav-link" to="/signup">Signup</Link>
                {userIsLoggedIn 
                ? <button onClick={handleLogOut} className="nav-link logoutLink" >Log out</button>
                : <Link className="nav-link" to="/login">Login</Link>
            }
            </nav>
            <div className="container">
                {userIsLoggedIn ? <h1>PRIVATE AREA</h1> : <LoginForm handleLogin={handleLogin}/> }
            </div>
        </main>
    )
}