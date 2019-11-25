import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const popover = ({id, title, message}) => {
  return (
    <Popover id={id} title={title}>
      {message}
    </Popover>
  );
}

const ElementWithPopover = ({id, element, title, message, position}) => {
  return (
    <OverlayTrigger
      overlay={popover({id, title, message})}
      trigger={['hover', 'focus']}
      placement={position}
      positionLeft={200}
      positionTop={50}
    >
      {element}
    </OverlayTrigger>
  );
}

export default ElementWithPopover;