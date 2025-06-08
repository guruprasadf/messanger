import "./chat.scss";
import { friendsList } from "./constants";

export const ChatList = (props) => {
    const { selectedFriend, setSelectedFriend } = props;
    return(
        <div className="list">
               {friendsList?.map((info) => <div className= {`list-item ${selectedFriend === info.name ? 'selected' : ""}`} onClick={()=> setSelectedFriend(info.name)}>{info?.name}</div>)}
        </div>
    )
}