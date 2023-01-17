import Anurag_Profile from '../../../../../assets/message/Anurag.jpeg';
import './userProfile.scss';
import { AiOutlineDown } from "react-icons/ai";

const UserProfile = () => {
  const toggleInfo = (e: any) => {
    e.target.parentNode.classList.toggle("open");
  }

  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <img src={Anurag_Profile} alt="img" />
        </div>
        <h5>Anurag Prajapati</h5>
        <p>follow :- anuragprajapatianu</p>
      </div>
      <div className="profile__card">
        <div className="card__header" onClick={toggleInfo}>
          <h4>Information</h4>
          <AiOutlineDown onClick={toggleInfo} />
        </div>
        <div className="card__content">
          Managing consistency across applications and teams is always a challenge, especially in a large firm. Be it UX, design, code-styling, build tools, the list goes on. This is what largely constitutes the Developer Experience.
        </div>
      </div>
    </div>
  )
}

export default UserProfile;