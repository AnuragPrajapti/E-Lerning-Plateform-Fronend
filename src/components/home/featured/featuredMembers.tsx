import { Container, Row, Col } from "react-bootstrap";
import Img1 from '../../../assets/featureSection/img1.jpg';
import Img2 from '../../../assets/featureSection/img2.jpg';
import Img3 from '../../../assets/featureSection/img3.jpg';
import Img4 from '../../../assets/featureSection/img4.jpg';
import './featuredMembers.scss'


const FeaturedMembers = () => {
  return (
    <>
      <Container >
        <Row className="containerWrapper" id='feature' >
          <Col lg={4} sm={12} md={6} className='title' >
            <p>Featured Members</p>
            <span>Get in touch to be featured here</span>
          </Col>
          <Col lg={8} sm={12} md={6}  >
            <div className='imageWrapper'>
              <Row>
                <Col>
                  <img id="img1" src={Img1} alt='image1' />
                  <img id="img1" src={Img2} alt='image2' />
                </Col>
                <Col>
                  <img id="img2" src={Img3} alt='image3' />
                  <img id="img2" src={Img4} alt='image4' />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FeaturedMembers;