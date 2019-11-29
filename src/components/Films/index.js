import React, { Component} from 'react';
import { Button, Col, Row } from 'react-bootstrap'
import { apiGet, apiPost } from './../../services';
import { urlFilms} from './../../constants/urlApi'
import Form from './Form';
import FormReservation  from './../Reservation/Form';
import FieldGroup from '../Resources/FieldGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from '../Head';
import './styles.scss';

class Films extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       films: [],
       start_date: new Date(),
       end_date: new Date(),
       errors: {
         start_date: '',
         end_date: ''
       }
    };

    this.childForm = React.createRef();
    this.childFormReservation = React.createRef();
    this.modalCreateFilm = this.modalCreateFilm.bind(this);
    this.modalCreateReservation = this.modalCreateReservation.bind(this);
  };
    
  componentDidMount = () => {
    this.getFilms();    
  };

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
    this.handleFilms();
  }

  handleEndDateChange = e => {
    if (e < this.state.start_date) { return; } 
    this.setState({ 
      end_date: e
    })
    this.handleFilms();
  }

  handleFilms = () => {
    const { start_date, end_date } = this.state;
    if(start_date && end_date){
      setTimeout(() => {
        this.getFilms();
      }, 300);
    }
  }


  getFilms = () => {
    const { start_date, end_date } = this.state;
    const urlF = `${urlFilms}?start_date=${start_date}&end_date=${end_date}`

    apiGet(urlF).then((data) => {
      this.setState({
        films: data.films
      })
    })
  }

  AddFilm = (film) => {
    let { films } = this.state;
    films = films.concat(film);
    this.setState({
        films
    })
  }


  createReservation = () => {
    const { film } = this.state;

    apiPost(urlFilms, film).then((data) => {
      debugger;
    })
  }

  modalCreateFilm = () => {
    this.childForm.handleShow();
  }

  modalCreateReservation = (film) => {
    this.childFormReservation.handleShow(film);
  }

  responseApi = (body, kind) => {
    setTimeout(() => {
      this.feedbackModal.handleShow({ body, kind })
    }, 500); 
  }

  render() {
    const {films, start_date, end_date, errors } = this.state;

    return(
      <React.Fragment>
        <Head title="Películas" nameButton="Crear Nueva Película" actionButton={this.modalCreateFilm }/>
        {/* FIXME: Generar nuevo componente */}
        <Col className="container-dates">
          <label>Seleccionar Fechas </label>
          <Col className="dates">
            <FontAwesomeIcon icon="calendar-alt"/>
            <FieldGroup type="text" label="" help="" kind="date" placeholder="Ej: 2019-11-23" selected={start_date} errors={errors.start_date} minDate={new Date()} onChange={this.handleStartDateChange}/>
          
            <FieldGroup type="text" label="" help="" kind="date" placeholder="Ej: 2019-11-23" selected={end_date} errors={errors.end_date} minDate={start_date} onChange={this.handleEndDateChange}/>
          </Col>
        </Col>
        {/* FIXME: Generar nuevo componente */}
        <Row>
          <Col className="listFilms">
            { 
              films.map((film, i) => (
                <React.Fragment key={i}> 
                  <Col xs={12} sm={6} md={3} >
                    <Col className="containerFilm">
                      <Col className="film">
                        <img src={film.url_film} alt={film.name} width="150px" />
                        <Button className="actionReservation" onClick={ () => this.modalCreateReservation(film)}> Reservar </Button>
                      </Col>
                    </Col>
                  </Col>
                </React.Fragment>
              ))
            }
          </Col>
        </Row>
        <Form ref={instance => this.childForm = instance} AddFilm={ (film) => this.AddFilm(film)}/>
        <FormReservation ref={instance => this.childFormReservation = instance} />
      </React.Fragment>
    )
  }

}


export default Films;