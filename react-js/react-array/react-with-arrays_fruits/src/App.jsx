import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1340,
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: 1341,
      name: "🥝 Kiwi",
      color: "green",
    },
  ];

  return (
    <div className="app">
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <Card name={fruit.name} color={fruit.colorq} />
          </li>
        ))}
      </ul>
    </div>
  );
}
