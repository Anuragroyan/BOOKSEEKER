import React from 'react';
import chat_1 from './chatbot.jpg';

const Chatbot = () => {
    return(
        <>
        <h1 style={{fontWeight:"bolder",fontStyle:"italic",fontFamily:"cursive"}}>CHATBOT</h1>
        <img src={chat_1} height="440px" width="1050px" /><br/><br/>
        <a href="http://127.0.0.1:7000" style={{fontWeight:"bolder",fontStyle:"italic",fontFamily:"cursive"}}>Bookseeker Chatbot</a>
        <br/><br/>
        </>
    );
};

export default Chatbot;