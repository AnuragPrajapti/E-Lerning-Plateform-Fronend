import "./topbar.css";
import img1 from '../../../assets/socialMedia/person/1.jpeg'
import { useNavigate } from "react-router-dom";
import AdminProfileMidal from "../../modalPopup/AdminProfilePopup";
import { useState } from "react";
import { GrFormSearch } from "react-icons/gr";
import { BsFillPersonFill, BsChatLeftTextFill, BsBellFill } from "react-icons/bs";


export default function Topbar() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="topbarContainer">
      {
        AdminProfileMidal &&
        <AdminProfileMidal
          show={show}
          handleClose={handleClose}
        // adminInfo={adminInfo}
        />
      }
      <div className="topbarLeft">
        <span className="logo">E-Lerning-Plateform</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <GrFormSearch className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={() => navigate('/')}  >Home-Page</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill />
            <span className="topbarIconBadge">5</span>
          </div>
          <div className="topbarIconItem">
            <BsChatLeftTextFill />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <BsBellFill />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={img1} alt="" onClick={handleShow} className="topbarImg" />
      </div>
    </div>
  );
}
