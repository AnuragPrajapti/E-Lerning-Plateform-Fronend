import "./share.css";
import { MdOutlinePermMedia, MdLabelImportant, MdEditLocation } from "react-icons/md";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Img1 from '../../../assets/socialMedia/person/1.jpeg'


export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={Img1} alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdOutlinePermMedia className="shareIcon" style={{ color: "#e06d6d" }} />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <MdLabelImportant className="shareIcon" style={{ color: "blue" }} />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <MdEditLocation className="shareIcon" style={{ color: "green" }} />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <BsFillEmojiSmileFill className="shareIcon" style={{ color: "darkgoldenrod" }} />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
