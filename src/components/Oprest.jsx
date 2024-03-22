import Inputs from "./Inputs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Oprest() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  useEffect(() => {
    const rest = () => {
      const opRest =
        (parseInt(num1 || 0) || parseFloat(num1 || 0)) -
        (parseInt(num2 || 0) || parseFloat(num2 || 0));
      setResult(opRest);
    };
    rest();
  }, [num1, num2]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "num1") {
      setNum1(value);
    } else if (name === "num2") {
      setNum2(value);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="py-2 text-center" style={{ fontSize: '1.8rem' }}>Bienvenido al calculador de restas</h1>
      <p className="text-center" style={{ fontSize: '1.25rem', paddingBottom: '1rem' }}>Digite los dos números para esta operación</p>

      <Inputs num1={num1} num2={num2} handleInputChange={handleInputChange} />

      <p className="py-2 text-center">La resta de ambos números es: {result}</p>
      <Link to="/">
        <button className="mx-1 my-1 px-4 py-2 text-sm bg-yellow-600 border border-solid border-transparent rounded-lg">Volver</button>
      </Link>
    </div>
  );
}
