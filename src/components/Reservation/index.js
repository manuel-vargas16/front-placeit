import React, { Component} from 'react';
import { Col, Table } from 'react-bootstrap'
import { apiGet } from './../../services';
import { urlReservations} from './../../constants/urlApi'
import Form from './Form'
import Head from '../Head';
import './styles.scss';

class Reservation extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      reservations: []
    };
  };
  
  componentDidMount = () => {
    this.getReservation();    
  };


  getReservation = () => {
    apiGet(urlReservations).then((data) => {
      debugger;
      this.setState({
        reservations: data.reservations
      })
    })
  }


  render() {
    const { reservations } = this.state;

    return(
      <React.Fragment>
        {/* GENERAR NUEVO COMPONENTE */}
        <Head title="Reservas" />
        <Col>
          <Table>
            <thead>
              <th>Película</th>
              <th>Nombre Reservante</th>
              <th>Correo Electrónico</th>
              <th>Documento</th>
              <th>Celular</th>
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