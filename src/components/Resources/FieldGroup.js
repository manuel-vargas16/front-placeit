import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// , {showMonthYearPicker, registerLocale, setDefaultLocale} 
// registerLocale('es', es);
// setDefaultLocale('es');

const text = (props) => {
  return (
    <FormControl {...props} className={`${props.className}`}/>
  )
}

const date = (props) => {
  return (
    <DatePicker 
      {...props} 
      className="form-control w-100"
    />
  )
}

const time = (input, props) => {
  return (
    <DatePicker 
      {...input} 
      {...props}
      value={input.value}
      showTimeSelect 
      showTimeSelectOnly
      timeFormat="HH:mm"
      // dateFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"      // dateFormat="LLL"
      className="form-control"
    />
  )
}

const datetime = (input, props) => {  
  
  return (
    <DatePicker 
      {...input}  
      {...props}    
      selected={input.value}
      showTimeSelect  
      dateFormat="yyyy-MM-dd HH:mm"
      minDate={ props.minimum ? new Date() : '' }   
      className={`form-control w-100`}
      timeCaption="time"
    />
  )
}

const textarea = (props) => {
  return (
    <FormControl componentClass="textarea" {...props} />
  )
}

// REACT
function FieldGroup({ id, label, help, errors, kind, ...props }) {
  return (
    //validationState={typeValidation()} 
    <FormGroup controlId={id} >
      {label && <ControlLabel>{label} </ControlLabel>} {props.required && <FontAwesomeIcon icon="asterisk" className="obligatory"/>}
      { 
        (kind === 'default') ?
          text(props)
        : (kind === 'date') ?
          date(props)
        : (kind === 'time') ?
          time(props)
        : (kind === 'datetime') ?
          datetime(props)
        : (kind === 'textarea') ?
          textarea(props)
        : ''
      }
      {help && <HelpBlock className="font-bold-12">{help}</HelpBlock>}
      {errors && <HelpBlock className="colorDanger font-bold-12 help-block" align="center">{errors}</HelpBlock>}
    </FormGroup>
  );
}


export default FieldGroup;