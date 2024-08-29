import "./App.css";

export default function App() {
  return <Sum valueA={10} valueB={5} />;
}
export function Sum({ valueA, valueB }) {
  return (
    <h2>
      {valueA}+{valueB} is {valueA + valueB}
    </h2>
  );
}
