import { Container, Col, Row } from "react-bootstrap";
import "./profileConstructor.scss";
const ProfileConstructor = () => {
  return (
    <div className="smart-profile">
      <Container>
        <Row>
          <Col lg={12} className="profile-heading" id="profile" >
            <b>
              Connect With Constructor
              <br /> Community
            </b>
          </Col>
          <Row>
          <Col lg={4} sm={4} md={3} className="profile-title">
            <span>Smart Profile</span>
            <p>
              Create your smart business profile with a sharabe link and
              downloadable document to be a hand out to your clients. Your
              projects, protfolio and reviewa with compenlling story will stand
              out and will be found by clients looking forward to networok with
              you. Save money time from building websites.
            </p>
          </Col>
          <Col lg={8} sm={8} md={9} className="image-logo" >
              <b>B</b>
          </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};
export default ProfileConstructor;
