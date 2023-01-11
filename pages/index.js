import { useState } from "react";
import ComponentMain from "../components/ComponentMain";
import ComponentScreen from "../components/ComponentScreen";

export default function Home() {
  const [screen, setScreen] = useState("");
  const [operator, setOperator] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const updateScreen = (value) => {

    if (isAValidNumber(value)) {
     handleValidNumber(value);
    } else if (value === "Borrar") {
      cleanScreen();
    } else if(isoperator(value)){
      setOperator(value);
      setScreen(screen + value);
    }
    else if (value === "=") {
      setScreen(screen + value);
    }
}

const cleanScreen = () => {
  setScreen(""); 
  setFirstNumber("");
  setSecondNumber("");
  setOperator("");
  }

const handleResult = () => {
    if (operator === "+") {
      const suma = parseInt(firstNumber) + parseInt(secondNumber);
      setScreen(suma);
      setFirstNumber(suma.toString());
    } else if (operator === "-") {
      const resta = parseInt(firstNumber) - parseInt(secondNumber);
      setScreen(resta);
      setFirstNumber(resta.toString());
    } else if (operator === "*") {
      const multiplicacion = parseInt(firstNumber) * parseInt(secondNumber);
      setScreen(multiplicacion);
      setFirstNumber(multiplicacion.toString());
    } else if (operator === "/") {
      const division = parseInt(firstNumber) / parseInt(secondNumber);
      setScreen(division);
      setFirstNumber(division.toString());
    } 
    setSecondNumber("");
    setOperator("");
  }

  const isAValidNumber = (str) => {
    if(str === "0" || str === "1" || str === "2" || str === "3" || str === "4" || str === "5" || str === "6" || str === "7" || str === "8" || str === "9"){
      return true;
    }
  }

  const isoperator = (str) => {
   if(str === "+" || str === "-" || str === "*" || str === "/"){
     return true;
   }
  }

  const handleValidNumber = (value) => {
    if(operator !== ""){
      setSecondNumber(secondNumber + value);
    }
    else{ 
      setFirstNumber(firstNumber + value);
    }
    setScreen(screen + value)
  }

  return (
    <div className="container">
      <div className="main-styles-container">
        <ComponentScreen screen={screen} />
        <ComponentMain updateScreen={updateScreen} handleResult={handleResult} />
      </div>
    </div>
  )
}
