import { Container, Row, Col, Button } from "react-bootstrap";
import "./pricing.scss";
import { TiTick } from 'react-icons/ti';
import Slider from "react-slick";
import { PricingData } from "./pricingData";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {

  const navigate = useNavigate()
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1
  };

  const handeClick = () => {
    navigate('/signu')
  }

  return (
    <div className="pricing-section" id='pricing'>
      <Container>
        <Row>
          <Col className="heading-title-pricing" >
            <p>Pricing</p>
            <Row>
              <Col>
                <span>
                  Most cost effective to manage your business , the smart way. Choose the plan that works for you
                  <br />3 weeks free trial. No payment information needed!
                </span>
              </Col>
            </Row>
          </Col>
          {/* <Slider {...settings}> */}

          <Row className="cards-wrapper">
            {
              PricingData.length > 0 ? PricingData.map((item, index) => {
                return (
                  <Col key={index} >
                    <div className="price-card1" >
                      <div className={item.id === 0 ? 'basic-title1' : item.id === 1 ? 'basic-title2' : item.id === 2 ? 'basic-title3' : ""}>
                        <b>{item?.title}</b>
                        <p>{item?.subTitle}</p>
                      </div>
                      <p className="border-pera">{item?.description}</p>
                      <div className="content-title" >
                        <ul>
                          <li><TiTick style={{ color: 'blue' }} />{item?.firstPoint}</li>
                          <li><TiTick style={{ color: 'blue' }} />{item?.secondPoint}</li>
                          <li><TiTick style={{ color: 'blue' }} />{item?.thirdPoint}</li>
                          <li><TiTick style={{ color: 'blue' }} />{item?.fourthPoint}</li>
                          <li><TiTick style={{ color: 'blue' }} />{item?.fifthPoint}</li>
                          <li><TiTick style={{ color: 'blue' }} />{item?.sixthPoint}</li>
                        </ul>
                      </div>
                      <div className="bottom-button" >
                        <Button onClick={handeClick} >{item.button}</Button>
                      </div>
                    </div>
                  </Col>
                )
              }) : ""
            }
          </Row>
          {/* </Slider> */}
          <Row>
            <Col>
              <p className="bottom-heading">All Plans include one Estimation team member. Contact support for additional requirements</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default PricingSection;
