import React  from 'react';

function CalculatorButton(props) {
  return (
    <input type='button'
    value={props.caption}/>
  );
}

export default CalculatorButton;