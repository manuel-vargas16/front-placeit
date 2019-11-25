
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAsterisk, faBan, faBookOpen, faBoxes, faCartPlus, faCalendarAlt, faChartLine, faCheck, faCheckCircle, faCheckDouble, faCheckSquare, faClipboardList, faCoffee, faDoorClosed,faEye, faEdit, faFlask, faFilm, faTicketAlt, faInfoCircle, faPhone, faPrint, faPowerOff, faQuestionCircle, faDoorOpen, faSearch, faSquare, faTrash, faTable, faTimesCircle, faUserCheck, faTimes, faSave } from '@fortawesome/free-solid-svg-icons';
import Films from './components/Films';
import Reservation from './components/Reservation';
import NotFound from './components/NotFound'
import { Button, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.scss';


library.add(faAsterisk, faBan, faBookOpen, faBoxes, faCartPlus, faCalendarAlt, faChartLine, faCheck, faCheckCircle, faCheckDouble, faCheckSquare, faClipboardList, faCoffee, faDoorClosed, faEye, faEdit, faFlask, faFilm, faTicketAlt, faInfoCircle, faPhone, faPowerOff, faPrint, faQuestionCircle, faDoorOpen, faSearch, faSquare, faTrash, faTable, faTimesCircle, faUserCheck, faTimes, faSave);

class App extends Component {
  
  render() {
    return (
      <Router>
        <Row className="App">
          <Col xs={2} md={2} className="Sidebar">
            <h1 className="title"> Place it </h1>
            <ul>
              <li>
                 <Link to="films"> <FontAwesomeIcon icon="film"/> Películas </Link>
              </li>
              <li>
                <Link to="reservation" > <FontAwesomeIcon icon="ticket-alt"/> Reservas </Link>
              </li>
            </ul>
          </Col>
          <Col xs={10} md={10} className="Views">
            <Switch>
              <Route exact path="/films" >
                <Films/>
              </Route>
              <Route exact path="/reservation">
                <Reservation/>
              </Route>
              <Route >
                <NotFound/>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
      
    );
  }
}

export default App;
