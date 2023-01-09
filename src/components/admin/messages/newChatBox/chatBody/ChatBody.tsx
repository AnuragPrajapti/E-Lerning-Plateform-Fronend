import ChatContent from "../chatContent/chatContent";
import ChatList from "../chatList/chatList";
import UserProfile from "../userProfile/userProfile";
import "./chatBody.scss";


 const  ChatBody  = () => {

    return (
      <div className="main__chatbody">
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
    );

}
export default ChatBody;