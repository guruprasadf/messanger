export const FriendList = (props) => {
    const { list, selectedFriend, setSelectedFriend } = props;
    return(
        <div className="list">
               {list?.map((info) => <div className= {`list-item ${selectedFriend === info.name ? 'selected' : ""}`} onClick={()=> setSelectedFriend(info.name)}>{info?.name}</div>)}
        </div>
    )
}