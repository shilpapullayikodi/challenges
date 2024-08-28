import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    // create array of 5 fruits
    { id: 1337, name: "🍌 Banana", color: "yellow" },
    { id: 1340, name: "🍇 Grape", color: "purple" },
    { id: 110, name: "🍊 Orange", color: "orange" },
    { id: 106, name: "🍎 Apple", color: "red" },
    { id: 1339, name: "🍍 Pineapple", color: "orange" },
  ];
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
