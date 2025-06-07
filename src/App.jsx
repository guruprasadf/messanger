import "./App.css";
import { useState } from "react";
import { FriendList } from "./components/chat-list";
import { ChatWindow } from "./components/chat-window";
export const App = () => {
    const [selectedFriend, setSelectedFriend] = useState("BOB");
    return (
        <div className="chatContianer">
            <FriendList 
                list={[{name: "Alice"}, {name: "BOB"}]} 
                setSelectedFriend={setSelectedFriend}
                selectedFriend={selectedFriend}
            />
            <ChatWindow  selectedFriend={selectedFriend}/>
        </div>
    )
}