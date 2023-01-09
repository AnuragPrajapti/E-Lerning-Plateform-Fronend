import { useEffect, useRef, useState } from "react"
import Avatar from "../chatList/avatar";
import ChatItem from "./chatItem";
import { RiSendPlaneFill } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import './chatContent.scss' 

const ChatContent = () => {
   const messagesEndRef  = useRef<null | HTMLDivElement>(null);
   const [ inpval , setInpval ] = useState<any>({
      msg : ''
   });
  const  chatItms = [
    {
      key: 1,
      image:
        "https://picsum.photos/id/237/200/300",
      type: "",
      msg: "Hey Sir, How Are You ..?",
    },
    {
      key: 2,
      image:
        "https://picsum.photos/200/300?grayscale",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://picsum.photos/200/300?grayscale",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://picsum.photos/id/237/200/300",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://picsum.photos/200/300?grayscale",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://picsum.photos/id/237/200/300",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://picsum.photos/200/300?grayscale",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];
  
  const scrollToBottom  =  () =>{
    messagesEndRef!.current!.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(()=>{
        window.addEventListener("Keydown", (e:any)=>{
           if(e.j === 13) {
            if( inpval?.msg !== "" ) {
              chatItms.push({
                key : 1,
                type: "",
                msg: inpval?.msg,
                image:
                "https://picsum.photos/id/237/200/300",
              });
              setInpval([...chatItms])
              scrollToBottom();
              setInpval({ msg : "" });
            }
           }
        } )
        scrollToBottom();
  },[])

  return (
    <div className="main__chatcontent">
     <div className="content__header">
      <div className="blocks">
        <div className="current-chatting-user">
          <Avatar
            isOnline="active"
            image='https://picsum.photos/200/300?grayscale'
          />
          <p>Prakhar Jain</p>
        </div>
      </div>

      <div className="blocks">
        <div className="settings">
          <button className="btn-nobg">
            <i className="fa fa-cog"></i>
          </button>
        </div>
      </div>
    </div>
    <div className="content__body">
      <div className="chat__items">
        {
          chatItms?.length > 0 && chatItms.map((itm  , index : any) => {
          return (
            <ChatItem
              animationDelay={index + 2}
              key={itm.key}
              user={itm.type ? itm.type : "me"}
              msg={itm.msg}
              image={itm.image}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
    <div className="content__footer">
      <div className="sendNewMessage">
        <button className="addFiles">
         <FiPlusCircle style={{fontSize : '28px'}} />
        </button>
        <input
          type="text"
          name="msg"
          placeholder="Type a message here"
          value={inpval.msg}
          onChange={ (e) =>setInpval({ ...inpval , msg : e.target.value })   }
        />
        <button className="btnSendMsg" id="sendMsgBtn">
        <RiSendPlaneFill  style={{ fontSize : '24px' }} />
        </button>
      </div>
    </div>
  </div>
  )
}

export default ChatContent