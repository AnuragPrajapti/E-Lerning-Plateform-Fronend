import "./profile.css";
import Topbar from "../socialMedia/topbar/Topbar";
import Sidebar from "../socialMedia/sidebar/Sidebar";
import Rightbar from "../socialMedia/rightbar/Rightbar";
import Feed from "../socialMedia/feed/Feed";
import Profile_Img from "../../assets/socialMedia/post/3.jpeg";
import Person_Img from "../../assets/socialMedia/person/7.jpeg";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={Profile_Img}
                alt="Profile_Img"
              />
              <img
                className="profileUserImg"
                src={Person_Img}
                alt="person_Img"
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Markand Dighe</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
