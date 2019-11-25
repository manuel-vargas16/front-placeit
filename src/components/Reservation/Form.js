import React, { Component} from 'react';
import { Button, Col, Modal} from 'react-bootstrap'
import { apiPost } from './../../services';
import { urlReservations} from './../../constants/urlApi'
import FeedbackModal from './../Resources/FeedbackModal'
import  FieldGroup from './../Resources/FieldGroup.js'

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: '',
      phone: '',
      document: '',
      email: '',
      film: {},
      date: new Date(),
      errors: {
        name: null,
        phone: null,
        document: null,
        email: null,
        date: null,
      },
      open: false
    }

    this.feedbackModal = React.createRef();
    this.createReservation = this.createReservation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    debugger;
  }
  
  handleClearReservation = () => {
    this.setState({
      name: '',
      phone: '',
      document: '',
      email: '',
      date: new Date(),
      open: false,
    })
  }

  handleShow = (film) => {
    this.setState({
      open: true,
      film
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value 
    })
  }

  handleDateChange = e => {
    this.setState({ 
      date: e 
    })
  }

  responseApi = (body, kind) => {
    setTimeout(() => {
      this.feedbackModal.handleShow({ body, kind })
    }, 500); 
  }
    
  createReservation = (e) => {
    e.preventDefault();
    const { name, phone, document, email, date, film } = this.state;
    const film_id = film.id;
    const reservation = {
      reservation: { name, phone, document, email, date, film_id}
    }
    apiPost(urlReservations, reservation).then((data) => {
      this.responseApi('Reserva realizada', 'success');
      setTimeout(() => {
        this.handleClearReservation();
      }, 2000);
    })
    .catch( error => {
      this.responseApi(error.errors, 'danger');
    })
  }

  render() {
    const {name, phone, document, email, date, open, errors, film } = this.state;

    return(
        <Modal show={open} onHide={this.handleClose} container={this} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title> Reservar {film.name} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form name="formReservation" onSubmit={this.createReservation}>  
              <Col xs={12} md={6}>
                <FieldGroup name="name" type="text" label="Nombre Completo" help="" kind="default" placeholder="Ej: Manuel Vargas" value={name} errors={errors.name} onChange={this.handleChange}/>
                
                <FieldGroup name="document" type="text" label="Cédula" help="" kind="default" placeholder="Ej: 99567645" value={document} errors={errors.document} onChange={this.handleChange}/>
              
              </Col>
              <Col xs={12} md={6}>
                
                <FieldGroup name="phone" type="text" label="Celular" help="" kind="default" placeholder="Ej: 3103876785" value={phone} errors={errors.phone} onChange={this.handleChange}/>

                <FieldGroup name="email" type="text" label="Correo electrónico" help="" kind="default" placeholder="Ej: fulanito@gmail.com" value={email} errors={errors.email} onChange={this.handleChange}/>
                
                
              </Col>
              <Col align="center">
                <FieldGroup name="date" type="text" label="Fecha" help="" kind="date" placeholder="Ej: 2019-11-23" selected={date} errors={errors.date} minDate={new Date()} onChange={this.handleDateChange}/>
              </Col>
            
              <Col align="right">
                <Button type="submit" className="button"> Reservar Ahora </Button>
              </Col>
          </form>
          </Modal.Body>
          <FeedbackModal header="Reserva" ref={ instance => { this.feedbackModal = instance } } />
        </Modal>
    )
  }


  
}

export default Form;