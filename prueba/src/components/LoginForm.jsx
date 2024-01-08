import { useState } from "react";

export default function LoginForm({handleLogin}) {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleDataChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleUserLogin = (e) => {
        e.preventDefault();
        if(!data.email || !data.password) return alert("Please fill all the fields");
        indigitall.logIn(data.email, (device)=>{
            console.log("logged in")
            console.log("device", device)
            handleLogin();
       }, (error)=>{
           console.log(error)
       });
        
    }
  return (
    <form onSubmit={handleUserLogin} className="form">
        <input required name="email" placeholder="Email" onChange={handleDataChange} type="text" className="input" value={data.email}/>
        <input required name="password" placeholder="Password" onChange={handleDataChange} type="password" className="input" value={data.password}/>
        <button type="submit" className="button">SUBMIT</button>
    </form>
  )
}
