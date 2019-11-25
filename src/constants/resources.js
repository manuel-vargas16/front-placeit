// import React from 'react'
import { padStart } from 'lodash-es';

const currentdate = new Date(); 

export const toggleStatus = status => {
  return (status === 'active') ? 'inactive' : 'active';
}

export const generateRandom = interactions => {
  const characters = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
  let random = "";
  
  for( let i = 0; i < interactions; i++ ) {
    random +=characters.charAt(Math.floor(Math.random()*characters.length)); 
  }
  return random;
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
  document.getElementById("loaderToki").style.display = "block";
}

export const hideLoader = () => {
  document.getElementById("loaderToki").style.display = "none";
}

export const printWindow = (divName) => {
  debugger;
  let printContents = document.getElementById(divName).innerHTML;
  // let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;

  window.print();
  window.location.reload();
  // document.body.innerHTML = originalContents;
}

