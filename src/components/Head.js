import React from 'react';
import { Button, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Head = ({title, nameButton, actionButton}) => {
  return (
    <Row md={12} xs={12} className="head" >
      <Col xs={12} sm={6} md={6}> <h2  align="left"> {title} </h2> </Col>
      { 
        
        nameButton &&   
        <Col xs={12} sm={6} md={6} align="right">
          <Button className="button" onClick={actionButton}> <FontAwesomeIcon icon="plus"/>  {nameButton}</Button>
        </Col>
        
      }
    </Row>
  )
}

export default Head;