import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

class FeedbackModal extends Component {

  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  
    this.state = {
       show: false,
       body: null
    };
  };

  handleShow = ({ body, kind }) => {
    this.setState({ show: true, body, kind });

  }

  handleClose = () => {
    this.setState({ show: false });
  }  

  render(){
    const { body, kind, show } = this.state; 
    
    return(
      <div className="modal-container">
        <Modal show={show} onHide={this.handleClose} container={this} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton className={ kind === 'success' ? "backgroundSuccess colorWhite" : "backgroundDanger colorWhite"}>
            <Modal.Title> {this.props.header} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>
              { body && body }
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle={kind} className={ kind === 'success' ? 'backgroundSuccess' : 'backgroundDanger'} onClick={this.handleClose}> Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default FeedbackModal;