import React, { Component} from 'react';
import { Col, Table } from 'react-bootstrap'
import { apiGet } from './../../services';
import { urlReservations} from './../../constants/urlApi'
import Form from './Form'
import Head from '../Head';
import './styles.scss';
import FieldGroup from '../Resources/FieldGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Reservation extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      reservations: [],
      start_date: new Date(),
      end_date: new Date(),
      errors: {
        start_date: '',
        end_date: ''
      }
    };
  };
  
  componentDidMount = () => {
    this.getReservations();    
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
    this.handleReservation();
  }

  handleEndDateChange = e => {
    if (e < this.state.start_date) { return; } 
    this.setState({ 
      end_date: e
    })
    this.handleReservation();
  }

  handleReservation = () => {
    const { start_date, end_date } = this.state;

    if(start_date && end_date){
      setTimeout(() => {
        this.getReservations();
      }, 300);
    }
  }

  getReservations = () => {
    const { start_date, end_date } = this.state;
    const urlR = `${urlReservations}?start_date=${start_date}&end_date=${end_date}`
    
    apiGet(urlR).then((data) => {     
      this.setState({
        reservations: data.reservations
      })
    })
  }

  render() {
    const { reservations, start_date, end_date, errors } = this.state;

    return(
      <React.Fragment>
        {/* GENERAR NUEVO COMPONENTE */}
        <Head title="Reservas" />
        {/* FIXME: Generar nuevo componente */}
        <Col className="container-dates">
          <label>Seleccionar Fechas </label>
          <Col className="dates">
            <FontAwesomeIcon icon="calendar-alt"/>
            <FieldGroup type="text" label="" help="" kind="date" placeholder="Ej: 2019-11-23" selected={start_date} errors={errors.start_date} onChange={this.handleStartDateChange}/>
          
            <FieldGroup type="text" label="" help="" kind="date" placeholder="Ej: 2019-11-23" selected={end_date} errors={errors.end_date} minDate={start_date} onChange={this.handleEndDateChange}/>
          </Col>
        </Col>
        {/* FIXME: Generar nuevo componente */}
        <Col>
          <Table responsive>
            <thead>
              <tr>
                <th>Película</th>
                <th>Nombre Reservante</th>
                <th>Correo Electrónico</th>
                <th>Documento</th>
                <th>Celular</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
            { 
              reservations.map((reservation, i) => (
                <tr>
                  <td>
                    {reservation.film}
                  </td>
                  <td>
                    {reservation.name}
                  </td>
                  <td>
                    {reservation.email}
                  </td>
                  <td>
                    {reservation.document}
                  </td>
                  <td>
                    {reservation.phone}
                  </td>
                  <td>
                    {reservation.date}
                  </td>
                </tr>
              ))
            }
            </tbody>
          </Table>
        </Col>
        
        <Form/>
      </React.Fragment>

    )
  }

  

}


export default Reservation;