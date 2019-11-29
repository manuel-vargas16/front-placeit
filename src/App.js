
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAsterisk, faBan, faBookOpen, faBoxes, faPlus, faCalendarAlt, faChartLine, faCheck, faCheckCircle, faCheckDouble, faCheckSquare, faClipboardList, faCoffee, faDoorClosed,faEye, faEdit, faFlask, faFilm, faTicketAlt, faInfoCircle, faPhone, faPrint, faPowerOff, faQuestionCircle, faDoorOpen, faSearch, faSquare, faTrash, faTable, faTimesCircle, faUserCheck, faTimes, faSave } from '@fortawesome/free-solid-svg-icons';
import Films from './components/Films';
import Reservation from './components/Reservation';
import NotFound from './components/NotFound'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.scss';


library.add(faAsterisk, faBan, faBookOpen, faBoxes, faPlus, faCalendarAlt, faChartLine, faCheck, faCheckCircle, faCheckDouble, faCheckSquare, faClipboardList, faCoffee, faDoorClosed, faEye, faEdit, faFlask, faFilm, faTicketAlt, faInfoCircle, faPhone, faPowerOff, faPrint, faQuestionCircle, faDoorOpen, faSearch, faSquare, faTrash, faTable, faTimesCircle, faUserCheck, faTimes, faSave);

class App extends Component {
  
  render() {
    return (
      <Router>
        <Row className="App">
          <Col xs={12} md={3} className="Sidebar">
            <h1 className="title"> <b> Place</b><span className="">it</span> </h1>
            <ul>
              <li>
                <Link to="reservation" > <FontAwesomeIcon icon="calendar-alt"/> Reservas </Link>
              </li>
              <li>
                 <Link to="films"> <FontAwesomeIcon icon="film"/> Películas </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={9} className="Views">
            <Switch>
              <Route exact path="/films" >
                <Films/>
              </Route>
              <Route exact path="/reservation">
                <Reservation/>
              </Route>
              <Route path="/" >
                <Films/>
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
