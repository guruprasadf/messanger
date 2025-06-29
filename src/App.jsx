import { useState } from "react";
import { ChatList } from "./components/chat-list";
import { ChatWindow } from "./components/chat-window";

export const App = () => {
    const [selectedFriend, setSelectedFriend] = useState("BOB");
    return (
        <div className="chatContianer">
            <ChatList 
                setSelectedFriend={setSelectedFriend}
                selectedFriend={selectedFriend}
            />
            <ChatWindow  selectedFriend={selectedFriend}/>
        </div>
    )
}