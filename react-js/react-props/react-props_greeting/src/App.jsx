import "./App.css";
export default function App() {
  return (
    <>
      {" "}
      <Greeting name="Nila" />
      <Greeting name="Shilpa" />;{" "}
    </>
  );
}
export function Greeting({ name }) {
  const coaches = ["Nila", "Nirmal"];
  if (coaches.includes(name)) {
    return <h1>`Hello Coach! ${name}`</h1>;
  } else {
    return <h1>`Hello ${name}`</h1>;
  }
}
