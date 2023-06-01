import React from "react";

function CalculatorDisplay(props) {
    return(
        <input
        readOnly={true}
        value={props.text}
        className="calculator-display"
        />
    )
}


export default CalculatorDisplay;