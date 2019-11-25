import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

class GeneralModal extends Component {

  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewValue = this.handleNewValue.bind(this);
    this.obj = {};
    
    this.state = {
       show: false,
       body: null,
       obj: {}
    };
  };
  
  handleShow = ({ object, header, body, nameAction, kind, action }) => {
    this.setState({ show: true, object, header, body, nameAction, kind, action});
  }

  handleClose = () => {
    this.setState({ show: false });
  }  

  handleNewValue = ({ key, value }) => {
    this.obj[key] = value; 
    this.setState({ obj: this.obj });
  } 

  handleSubmit =  ( e ) => {
    const { object, action } = this.state;
   
    action(object.id, this.state.obj)
    .then( r => { debugger})
    .catch(e => { debugger;});    
  }

  render(){
    const { header, body, nameAction, kind,  show } = this.state; 

    return(
      <div className="modal-container">
        <Modal show={show} onHide={this.handleClose} container={this} aria-labelledby="contained-modal-title">
          <form onSubmit={ () => this.handleSubmit }>
            <Modal.Header closeButton className={ kind === 'success' ? "backgroundSuccess colorWhite" : kind === 'danger' ? "backgroundDanger colorWhite" : ''}>
              <Modal.Title> {header} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               { body && body() }
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}> Cerrar </Button>
              { 
                nameAction && 
                  <Button type="submit" bsStyle={kind} className={ kind === 'success' ? 'backgroundSuccess' : kind === 'danger' ? 'backgroundDanger' : ''} disabled={ Object.keys(this.state.obj).length === 0 } > 
                    { nameAction } 
                  </Button>
              }
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    )
  }
}

export default GeneralModal;