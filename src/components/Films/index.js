import React, { Component} from 'react';
import { Button, Col } from 'react-bootstrap'
import { apiGet, apiPost } from './../../services';
import { urlFilms} from './../../constants/urlApi'
import Form from './Form';
import FormReservation  from './../Reservation/Form';
import Head from '../Head';
import './styles.scss';

class Films extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       films: []
    };

    this.childForm = React.createRef();
    this.childFormReservation = React.createRef();
    this.modalCreateFilm = this.modalCreateFilm.bind(this);
    this.modalCreateReservation = this.modalCreateReservation.bind(this);
  };
    
  componentDidMount = () => {
    this.getReservation();    
  };


  getReservation = () => {
    apiGet(urlFilms).then((data) => {
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

    apiPost(urlFilms,).then((data) => {
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
    const {films } = this.state;

    return(
      <React.Fragment>
        <Head title="Películas" nameButton="Crear Nueva Película" actionButton={this.modalCreateFilm }/>
        <Col className="listFilms">
          { 
            films.map((film, i) => (
              <React.Fragment key={i}> 
                <Col xs={6} md={3} className="film">
                  <img src={film.url_film} alt={film.name} width="150px" />
                  <Button className="actionReservation" onClick={ () => this.modalCreateReservation(film)}> Reservar </Button>
                </Col>
              </React.Fragment>
            ))
          }
        </Col>
        <Form ref={instance => this.childForm = instance} AddFilm={ (film) => this.AddFilm(film)}/>
        <FormReservation ref={instance => this.childFormReservation = instance} />
      </React.Fragment>
    )
  }

}


export default Films;