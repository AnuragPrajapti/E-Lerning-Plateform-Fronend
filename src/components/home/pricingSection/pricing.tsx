import { Container, Row, Col, Button } from "react-bootstrap";
import "./pricing.scss";
import { TiTick } from 'react-icons/ti';

const PricingSection = () => {
  return (
    <div className="pricing-section" id='pricing'>
      <Container>
        <Row>
          <Col className="heading-title-pricing" >
            <p>Pricing</p>
          </Col>
          <Row>
            <Col>
              <span>
                Most cost effective to manage your business , the smart way. Choose the plan that works for you
                <br />3 weeks free trial. No payment information needed!
              </span>
            </Col>
          </Row>
          <Row className="cards-wrapper" >
            <Col>
              <div className="price-card1" >
                <div className="basic-title1">
                  <b>Basic</b>
                  <p>Per User Per month</p>
                </div>
                <p className="border-pera">Get Started With</p>
                <div className="content-title" >
                  <p><TiTick style={{ color: 'blue' }} />   Basic profile</p>
                  <p><TiTick style={{ color: 'blue' }} />   Receive bid leads</p>
                  <p><TiTick style={{ color: 'blue' }} />   Access and download bid documents</p>
                </div>
                <div className="bottom-button" >
                  <Button>Singh up</Button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="price-card1" >
                <div className="basic-title2">
                  <b>Standaed</b>
                  <p>Per User Per month</p>
                </div>
                <p className="border-pera">Get Started With</p>
                <div className="content-title" >
                  <p><TiTick style={{ color: 'blue' }} />   Dashboards</p>
                  <p><TiTick style={{ color: 'blue' }} />   Create contacts</p>
                  <p><TiTick style={{ color: 'blue' }} />   Send or receive quote requests</p>
                  <p><TiTick style={{ color: 'blue' }} />   Bid Menagement</p>
                  <p><TiTick style={{ color: 'blue' }} />   Recevie/sumbit  bids and quotes</p>
                  <p><TiTick style={{ color: 'blue' }} />   Limited cloud bids and quotes</p>
                </div>
                <div className="bottom-button" >
                  <Button>Singh up</Button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="price-card1" >
                <div className="basic-title3">
                  <b>Premium</b>
                  <p>Per User Per month</p>
                </div>
                <p className="border-pera">Get Started With</p>
                <div className="content-title" >
                  <p><TiTick style={{ color: 'blue' }} />  Create amd share Smart profile</p>
                  <p><TiTick style={{ color: 'blue' }} />  In app Communication</p>
                  <p><TiTick style={{ color: 'blue' }} />  Search leads from members</p>
                  <p><TiTick style={{ color: 'blue' }} />  Be found in search</p>
                  <p><TiTick style={{ color: 'blue' }} />  Get reviews on smart profile</p>
                  <p><TiTick style={{ color: 'blue' }} />  Sufficient cloud storage (100GB  included for free, and additional cost there on)</p>
                </div>
                <div className="bottom-button" >
                  <Button>Singh up</Button>
                </div>
              </div>
            </Col>
          </Row>
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
