import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from 'react-bootstrap';
import { AccordionData } from './jsonData';
import './accordion.scss'
const AccordionSection = () => {
    return (
        <Container>
            <Row className='accordion-section' id='accordion' >
                <p>Some Questions Asked</p>
                {
                    AccordionData?.map((item , index ) =>
                        <Accordion className='accordion-contant' defaultActiveKey={['0']} alwaysOpen key={index}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{item?.title}</Accordion.Header>
                                <Accordion.Body>{item?.description}</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                }
            </Row>
        </Container>
    )
}

export default AccordionSection;