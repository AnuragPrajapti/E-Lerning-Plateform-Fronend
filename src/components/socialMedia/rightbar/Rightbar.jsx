import "./rightbar.scss";
import { Users } from "../socialMediaJonData";
import Online from "../online/Online";
import { ImgageData } from "./ImgData";
import { Col, Container, Row } from "react-bootstrap";
import Birthday_Img from '../../../assets/socialMedia/gift.png'
import adImg from '../../../assets/socialMedia/ad.png'

export default function Rightbar({ profile }) {
  console.log(111, ImgageData)
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdat-container" >
          <Container>
            <Row >
              <Col>
                <div className="birthday-Container-list">
                  <img className="birthdayImg" src={Birthday_Img} alt="Birthday_Img" />
                  <span className="birthdayText">
                    <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
                  </span>
                </div>
                <div>
                  <img className="rightbar-Ad" src={adImg} alt="adImg" />
                  <h4 className="rightbar-title">Online Friends</h4>
                  <ul className="rightbar-friend-list">
                    {Users.map((u) => (
                      <Online key={u.id} user={u} />
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <div className="profile-container">
          <Container>
            <Row className="profile-heading" >
              <Col>
                <h5>User information</h5>
                <p>City : <span>Indore</span> </p>
                <p>From : <span>Ranjeet</span> </p>
                <p>Relationship : <span>Mingle</span> </p>
              </Col>
            </Row>
            <Row className="users-friend"  >
              <Col>
                <h4>User friends</h4>
                <div className="following-list">
                  {
                    ImgageData.length > 0 ? ImgageData?.map((personImg, index) => {
                      return (
                        <div className="following-list-item" key={index}>
                          <img
                            src={personImg?.PersonImgae}
                            alt="Person_Img1"
                          />
                          <span className="rightbarFollowingName">{personImg?.name}</span>
                        </div>
                      )
                    }) : ""
                  }
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
