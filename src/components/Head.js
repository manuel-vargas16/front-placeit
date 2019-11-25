import React from 'react';
import { Button, Col } from 'react-bootstrap'

const Head = ({title, nameButton, actionButton}) => {
  return (
    <Col className="head">
      <h1 className="title"> {title} </h1>      
      {
        nameButton &&
          <Button className="button" onClick={actionButton}> {nameButton}</Button>
      }
    </Col>
  )
}

export default Head;