import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row } from 'react-bootstrap';
import { AccordionData } from './jsonData';
import './accordion.scss'

const AccordionSection = () => {

  const [accordionValue, setAccordionValue] = useState<any>()
  const handleSelect = (id: any) => {
    setAccordionValue(id)
  }

  return (
    <Container>
      <Row className='accordion-section' id='accordion' >
        <p>Some Questions Asked</p>
        {
          AccordionData?.map((item, index: any) =>
            <Accordion className='accordion-contant' key={index}>
              <Accordion.Item eventKey={accordionValue} onClick={() => handleSelect(item?.id)}  >
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