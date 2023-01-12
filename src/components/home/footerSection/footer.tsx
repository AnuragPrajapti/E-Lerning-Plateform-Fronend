import { Container, Row, Col } from "react-bootstrap";
import logo from '../../../assets/homePage/footer/footerLogo.png';
import './footer.scss'
const Footer = () => {

    return (
        <>
            <Container className="footer-contant" id="footer" >
                <Row>
                    <Col className="imgae-title" >
                        <img src={logo} alt="logo" />
                        <p>Member of Parliyament</p>

                    </Col>
                    <Col>
                        <ul>
                            <li>V-Plan</li>
                            <li>204,908 Dundas Street East,</li>
                            <li>Mississaugam, ON L4Y4H9</li>
                            <li>Canada</li>
                        </ul>
                    </Col>
                    <Col>
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