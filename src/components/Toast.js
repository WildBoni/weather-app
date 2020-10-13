import React from 'react';

let Toast = (props) => {
  return(
    <li>
      <p>{props.text}</p>
      <button onClick={props.onDismissClick}>X</button>
    </li>
  )
}

export default Toast;