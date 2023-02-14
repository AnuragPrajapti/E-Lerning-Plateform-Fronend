import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { ShoppingCardsData } from './shoppingCardsData';
import './shoppingCards.scss';
import ShoppingNavbar from './shoppingNavbar';

const ShoppingCards = () => {
  return (
    <div className='shopping-card-wrapper' >
      <Row>
          <Col>
            <ShoppingNavbar />
          </Col>
        </Row>
      <Container>
        <Row>
          <Col className='shopping-card-img' >
            {
              ShoppingCardsData ? ShoppingCardsData.map((value, index) => {
                return (
                  <>
                    <img src={value?.img} alt="" />
                  </>
                )
              }) : ""
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ShoppingCards;