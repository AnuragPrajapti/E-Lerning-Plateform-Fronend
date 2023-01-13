import { Container, Row, Col } from "react-bootstrap";
import logo from '../../../assets/homePage/footer/footerLogo.png';
import './footer.scss'
const Footer = () => {

    return (
        <>
            <Container className="footer-contant" id="footer" >
                <Row>
                    <Col className="imgae-title" md={4} lg={4} sm={12} >
                        <img src={logo} alt="logo" />
                        <p>Member of Parliyament</p>

                    </Col>
                    <Col lg={4} md={4} sm={6} xs={6}  >
                        <ul>
                            <li>V-Plan</li>
                            <li>204,908 Dundas Street East,</li>
                            <li>Mississaugam, ON L4Y4H9</li>
                            <li>Canada</li>
                        </ul>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={6} >
                        <ul>
                            <li>Pricing</li>
                            <li>About Us</li>
                            <li>Privacy</li>
                            <li>Resources</li>
                            <li>Refer a friend</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="copy-right" >
                        <p>&copy;  2022 : All Right Reserved </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;