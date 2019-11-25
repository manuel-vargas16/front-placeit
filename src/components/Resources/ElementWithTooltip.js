import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const tooltip = ({id, message}) => {
  return (
    <Tooltip id={id}>{message}</Tooltip>
  );
}

const ElementWithTooltip = ({id, element, message, position}) => {
  return (
    <OverlayTrigger
      overlay={tooltip({id, message})}
      placement={position}
      delayShow={300} 
      delayHide={150}
    >
      {element}
    </OverlayTrigger>
  );
}

export default ElementWithTooltip;