import "./App.css";

export default function App() {
  return <Smiley isHappy={false} />;
}
export function Smiley({ isHappy }) {
  if (isHappy) {
    return <h1>I am Happy 😁 </h1>;
  } else {
    return <h1>I am Sad 😞</h1>;
  }
}
