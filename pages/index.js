import { useState } from "react";
import ComponentMain from "../components/ComponentMain";
import ComponentScreen from "../components/ComponentScreen";

export default function Home() {
  const [screen, setScreen] = useState("");

  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const updateScreen = (value) => {

    if (isNumeric(value)) {
      setScreen(screen + value)
    }
  }

  const isNumeric = (str) => {
    return /^\d+$/.test(str);
  }

  return (
    <div className="container">
      <div className="main-styles-container">
        <ComponentScreen screen={screen} />
        <ComponentMain updateScreen={updateScreen} />
      </div>
    </div>
  )
}
