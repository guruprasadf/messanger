import "./chat.scss";
import { useState } from "react";
import { initialMessages } from "./constants";

export const ChatWindow = (props) => {
    
    const {selectedFriend} = props;
    const [messages, setMessages] = useState(initialMessages);
    const [text, setText] = useState("");

    const sendMessage = () => {
        const newMsg = { text : text?.trim(), sender : 'Me'};
        setMessages((prev)=> (
           { ...prev, [selectedFriend] : [...prev[selectedFriend], newMsg]}
        ));
        setText("");
    }

    return(
        <div className="chat-window">
            <div className="chat-header">
                   { `Chat with ${selectedFriend}`}
            </div>
            <div className="chat-messages">
                {
                    messages[selectedFriend].map((msg)=> {
                        return (<div className={`message ${msg.sender === "Me" ? "me" : ""}`}> <span>{msg.text}</span> </div>)
                    })
                }
            </div>
            <div className="chat-input">
                    <input type="text" placeholder="Type a message" onChange={(e)=>setText(e.target.value)} value={text}/>
                    <button onClick={sendMessage}> Send </button>
            </div>
        </div>
    )
}