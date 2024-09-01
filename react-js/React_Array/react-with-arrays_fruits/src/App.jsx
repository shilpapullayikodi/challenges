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
      id: 100,
      name: "🥝 Kiwi",
      color: "green",
    },

    {
      id: 1339,
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: 138,
      name: "🍊 Orange",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
