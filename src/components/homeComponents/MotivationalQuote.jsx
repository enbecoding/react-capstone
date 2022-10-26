import React, { useState, useEffect } from "react";
import { useAuth } from "../../store/AuthContext";
import { Card } from "react-bootstrap"

const MotivationalQuote = () => {
  const {currentUser} = useAuth()
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const [advice, setAdvice] = useState("");

  useEffect (() =>{
    const url = "https://api.adviceslip.com/advice"
    
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.slip.advice)
        setAdvice(json.slip.advice)
      } catch (error) {
        console.log("error receiving data", error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <Card>
      <h1>Hello {currentUser.email}!</h1>
      <h3>Welcome back to your Journey.</h3>
      <h5>Today's current date is: {`${month}/${date}/${year}`}</h5>
      <p>Your Random Quote is as follows: "{advice}"</p>
      </Card>
    </>
  );
};

export default MotivationalQuote;
