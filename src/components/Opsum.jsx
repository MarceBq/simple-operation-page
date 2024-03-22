import Inputs from "./Inputs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Opsum() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  // Uso de useEffect para realizar la suma cuando estos valores cambien o se modifiquen
  useEffect(() => {
    const sum = () => {
      const opSum =
        (parseInt(num1 || 0) || parseFloat(num1 || 0)) +
        (parseInt(num2 || 0) || parseFloat(num2 || 0));
      setResult(opSum);
    };
    sum();
  }, [num1, num2]);

  // Esta funcion permite manejar los cambios en los inputs de los numeros a sumar
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
      <h1 className="py-2 text-center" style={{ fontSize: '1.8rem' }}>Bienvenido al calculador de sumas</h1>
      <p className="text-center" style={{ fontSize: '1.25rem', paddingBottom: '1rem' }}>Digite los dos números para esta operación</p>

      <Inputs num1={num1} num2={num2} handleInputChange={handleInputChange} />

      <p className="py-2 text-center">La suma de ambos números es: {result}</p>
      <button className="mx-1 my-1 px-4 py-2 text-sm bg-yellow-600 border border-solid border-transparent rounded-lg">
        <Link to="/">Volver</Link>
      </button>
    </div>
  );
}
