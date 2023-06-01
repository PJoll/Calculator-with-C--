import React from "react";
import CalculatorPanel from "./CalculatorPanel";       

class Calculator extends React.Component{
    operationHandler(operation){

    }
    numberHandler(number){}
    dotHandler(){}
    clearHandler(){}
    equalHandler(){}
    render(){
        return(
            <div className="calculator-grid-container">
                <CalculatorPanel
                numberClicked={this.numberHandler.bind(this)}
                operationClicked={this.operationHandler.bind(this)}
                dotClicked={this.dotHandler.bind(this)}
                clearClicked={this.clearHandler.bind(this)}
                equalClicked={this.equalHandler.bind(this)}
                />
            </div>

        );
    }
}

export default Calculator;