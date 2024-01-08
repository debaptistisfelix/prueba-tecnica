import { useState, useEffect } from "react";
const topicsCodes = ["incomplete_step1","incomplete_step2", "incomplete_step3"];
const steps = ["step1", "step2", "newUser"];
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const getStepEvent = (formNumber) => {
    if(formNumber === 1) return steps[0];
    if(formNumber === 2) return steps[1];
    if(formNumber === 3) return steps[2];
}

const getTopicCode = (formNumber) => {
    if(formNumber === 1) return topicsCodes[0];
    if(formNumber === 2) return topicsCodes[1];
    if(formNumber === 3) return topicsCodes[2];
}

const checkEmails = (email, confirmEmail) => {
    if(email === confirmEmail) return true;
    return false;
}

const checkPasswords = (password, confirmPassword) => {
    if(password === confirmPassword) return true;
    return false;
}

export default function SignUpForm() {
    const [data, setData] = useState({
        name: "",
        birthday: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: ""
    })
    const navigate = useNavigate();
    const [dispalyedForm, setDisplayedForm] = useState(1);

    console.log(dispalyedForm)

    const handleDataChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        indigitall.topicsSubscribe(topicsCodes, (topics) => {
            // success function
            console.log(topics);
          }, () => {
            console.log(error)
          });
    },[])

    const handleFirstFormSUbmit = () => {
        event.preventDefault();
        if(dispalyedForm === 2){
            if(!checkEmails(data.email, data.confirmEmail)) return alert("Emails don't match");
        }
        if(dispalyedForm === 3){
            if(!checkPasswords(data.password, data.confirmPassword)) return alert("Passwords don't match");
        }
        const topic = getTopicCode(dispalyedForm);
        const step = getStepEvent(dispalyedForm);

        indigitall.topicsUnsubscribe([topic], (topics) => {
            console.log(topics);
          }, () => {
            console.log("unsub error",error)
          });

        indigitall.sendCustomEvent({
            eventType: step,
            customData: {}, // add your data
            async: false, // call this event sync/async
          }, (response) => {
            console.log(response);  
          },(error)=>{
            console.log("customEvent error",error)
          });  

        if(dispalyedForm === 3){
            indigitall.logIn(data.email, (device)=>{
                console.log("logged in")
                console.log("device", device)
                Cookies.set('userIsLoggedIn', 'true');
            navigate("/login")
           }, (error)=>{
               console.log(error)
           });
            
        } else if (dispalyedForm < 3){
            setDisplayedForm(prev => prev + 1);
        }
    }

   
  return (
    <form onSubmit={()=>{handleFirstFormSUbmit()}} className="form">
       {
        dispalyedForm === 1 && <>
         <input required name="name" placeholder="Name" onChange={handleDataChange} type="text" className="input" value={data.name}/>
        <input required name="birthday" placeholder="Birthday" onChange={handleDataChange} type="text" className="input" value={data.birthday}/>
        </>
       }
       {dispalyedForm === 2 && <>
        <input required name="email" placeholder="Email" onChange={handleDataChange} type="email" className="input" value={data.email}/>
        <input required name="confirmEmail" placeholder="Confirm Email" onChange={handleDataChange} type="email" className="input" value={data.confirmEmail}/>
       </>}
       {dispalyedForm === 3 && <>
        <input required name="password" placeholder="Password" onChange={handleDataChange} type="password" className="input" value={data.password}/>
        <input required name="confirmPassword" placeholder="Confirm password" onChange={handleDataChange} type="password" className="input" value={data.confirmPassword}/>
       </>}
        <button type="submit" className="button">SUBMIT</button>
    </form>
  )
}
