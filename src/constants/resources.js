// import React from 'react'
import { padStart } from 'lodash-es';

const currentdate = new Date(); 

export const toggleStatus = status => {
  return (status === 'active') ? 'inactive' : 'active';
}

export const actualDateTime = () => {
  return (
          currentdate.getFullYear() + "-" +
          padStart( (currentdate.getMonth()+1), 2, '0') + "-" + 
          padStart( currentdate.getDate(), 2, '0') + " " + 
          currentdate.getHours() + ":" +
          currentdate.getMinutes()
        );
}

export const actualDate = () => {
  return (
          currentdate.getFullYear() + "-" +
          padStart( (currentdate.getMonth()+1), 2, '0') + "-" + 
          padStart( currentdate.getDate(), 2, '0')
        );
}

export const actualTime = () => {
  return (
          padStart(currentdate.getHours(), 2, '0') + ":" +
          padStart(currentdate.getMinutes(), 2, '0')
        );
}

export const showLoader = () => {
  document.getElementById("loader").style.display = "block";
}

export const hideLoader = () => {
  document.getElementById("loader").style.display = "none";
}

