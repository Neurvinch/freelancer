import axios from 'axios';
import React, { useState } from 'react'

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const[userInput ,setUserInput] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    const handleGenerateResponse = async (req,res) =>{
         
        const response = await axios.post(`{import.meta.env.}`)
    } 
  return (
    <div>Chat</div>
  )
}

export default Chat