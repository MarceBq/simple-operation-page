import Button from "./Button.jsx";

export default function Home() {
  const buttonsUrl = [
    { operation: "Suma", ip: "sum" },
    { operation: "Resta", ip: "rest" },
    { operation: "Multiplicación", ip: "mult" },
    { operation: "División", ip: "div" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="py-2 text-center" style={{ fontSize: '2rem' }}>Simple Calculator</h1>
      <div className="w-full flex justify-around flex-wrap" >
        {buttonsUrl.map(({ operation, ip }, index) => (
          <Button key={index} operation={operation} ip={ip} />
        ))}
      </div>
    </div>
  );
}
