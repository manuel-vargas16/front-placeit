import React, { Component} from 'react';
import { Button, Col, Row, Modal} from 'react-bootstrap'
import { apiPost } from './../../services';
import { urlFilms} from './../../constants/urlApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  FieldGroup from './../Resources/FieldGroup.js'

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: '',
      description: '',
      url_film: '',
      start_date: new Date(),
      end_date: new Date(),
      errors: {
        name: null,
        description: null,
        url_film: null,
        start_date: null,
        end_date: null,
      },
      open: false
    }
    this.createFilm = this.createFilm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this)
    this.handleStartDateChange = this.handleStartDateChange.bind(this)
  }

  handleClearFilmState = () =>{
    this.setState({
      name: '',
      description: '',
      url_film: '',
      start_date: new Date(),
      end_date: new Date(),
      open: false
    })
    
  }
  
  handleShow = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleChange = (e) => {
    this.setState({  [e.target.name]: e.target.value   })
  }

  handleStartDateChange = e => {    
    if( e > this.state.end_date ){
      this.setState({ 
        start_date: e,
        end_date: e 
      })  
    }
    else {
      this.setState({ 
          start_date: e 
      })
    }
  }

  handleEndDateChange = e => {
    if (e < this.state.start_date) { return; } 
    this.setState({ 
      end_date: e
    })
  }
  
  createFilm = (e) => {
    e.preventDefault();
    const {AddFilm } = this.props;
    const { name, description, url_film, start_date, end_date } = this.state;
    const film = { 
      film: {
        name, description, url_film, start_date, end_date 
      }
    }
    debugger;
    apiPost(urlFilms, film).then((data) => {
      AddFilm(data.film);
      this.handleClearFilmState();
      return
    })
    .then( (error) => {      
    })
  }

  render() {
    const { name, description, url_film, start_date, end_date, open, errors} = this.state;

    return(
      <Modal show={open} onHide={this.handleClose} container={this} aria-labelledby="contained-modal-title">
        <Modal.Header closeButton>
          <Modal.Title> Crear Película </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form name="formReservation" onSubmit={this.createFilm}>  
            <Col xs={12} md={12}>
              <FieldGroup name="name" type="text" label="Título" help="" kind="default" placeholder="Ej: Superman" value={name} errors={errors.name} onChange={this.handleChange}/>

              <FieldGroup name="description" type="text" label="Sinopis" help="" kind="default" placeholder="Ej: Trata de un super heroe..." value={description} errors={errors.description} onChange={this.handleChange}/>

              <FieldGroup name="url_film" type="text" label="Poster Url" help="" kind="default" placeholder="Ej: http://superman.co/superman.png" value={url_film} errors={errors.url_film} onChange={this.handleChange}/>

              <Row>
                <Col xs={12} md={6}>
                  <FieldGroup type="text" label="Fecha Inicio" help="" kind="date" placeholder="Ej: 2019-11-23" selected={start_date} errors={errors.start_date} minDate={new Date()} onChange={this.handleStartDateChange}/>
                </Col>
                <Col xs={12} md={6}>
                  <FieldGroup type="text" label="Fecha Fin" help="" kind="date" placeholder="Ej: 2019-11-23" selected={end_date} errors={errors.end_date} minDate={start_date} onChange={this.handleEndDateChange}/>
                </Col>
              </Row>
            </Col>
            <Col align="right">
              <Button type="submit" className="button"> 
                <FontAwesomeIcon icon="plus"/>   Crear Nueva Película 
              </Button>
            </Col>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Form;