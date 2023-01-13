import { Container, Row, Col } from "react-bootstrap";
import './subscribe.scss'
const Subscribe = () => {

   return (
      <>
         <Container className="subscribe-update" >
            <Row>
               <Col>
                  <p>Subscribe To Get Latest Updates</p>
               </Col>
            </Row>
            <Row>
               <Col>
                  <span>Create your smart business with a event_deler link and downloadable document<br />to be a hand out to your clients.</span>
               </Col>
            </Row>
            <Row className="subscribeBtn text-center" >
               <Col lg={6} md={7} sm={6}  >
                  <input type="email" className="form-control" name="email" placeholder="test@gmail.com" />
               </Col>
               <Col  lg={6} md={5} sm={6} >
                  <button className="btn btn-warning" >Submit</button>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default Subscribe;