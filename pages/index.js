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
    } else if (isoperator(value)) {
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
      const suma = parseFloat(firstNumber) + parseFloat(secondNumber);
      setScreen(suma);
      reduceDecimal (suma),
      setFirstNumber(suma.toString());
    } else if (operator === "-") {
      const resta = parseFloat(firstNumber) - parseFloat(secondNumber);
      setScreen(resta);
      reduceDecimal (resta),
      setFirstNumber(resta.toString());
    } else if (operator === "x") {
      const multiplicacion = parseFloat(firstNumber) * parseFloat(secondNumber);
      setScreen(multiplicacion);
      reduceDecimal (multiplicacion),
      setFirstNumber(multiplicacion.toString());
    } else if (operator === "/") {
      const division = parseFloat(firstNumber) / parseFloat(secondNumber);
      setScreen(division);
      reduceDecimal (division),
      setFirstNumber(division.toString());
    }
    setSecondNumber("");
    setOperator("");
  }

  const reduceDecimal = (number) => {
    if (number % 1 !== 0) {
      return number.toFixed(2);
    } else {
      return number;
    }
  }

  const isAValidNumber = (str) => {
    if (str === "." || str === "0" || str === "1" || str === "2" || str === "3" || str === "4" || str === "5" || str === "6" || str === "7" || str === "8" || str === "9") {
      return true;
    }
  }

  const isoperator = (str) => {
    if (str === "+" || str === "-" || str === "x" || str === "/") {
      return true;
    }
  }

  const handleValidNumber = (value) => {
    if (operator !== "") {
      setSecondNumber(secondNumber + value);
    }
    else {
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
