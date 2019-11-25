export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export const PHONE_REGEX = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
export const TIME_REGEX = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

export const isEmail = email => {
  return EMAIL_REGEX.test(email)
}

export const isPhone = phone => {
  return PHONE_REGEX.test(phone)
}

export const isTime = time => {
  return TIME_REGEX.test(time)
}

export const isArray = array => {
  return array.constructor.toString().indexOf("Array") > -1;
}

export const isEmpty = value => {
  if( !value || value === "" ){
    return true;
  }
  else {
    return false;
  }
}

export const isBlank = value => {
  const errors = Object.keys(value).length;
  
  if( errors > 0 ){
    return false;
  }
  else{
    return true;
  }
}