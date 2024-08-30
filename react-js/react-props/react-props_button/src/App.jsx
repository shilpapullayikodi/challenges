import "./App.css";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <>
      <Button
        text="Click Me"
        backgroundcolor="red"
        diabled={false}
        color="blue"
        height="100px"
        width="100px"
        onClick={handleClick}
      />
    </>
  );
}
export function Button({
  backgroundcolor,
  color,
  disabled,
  text,
  onClick,
  height,
  width,
}) {
  return (
    <button
      style={{
        backgroundColor: backgroundcolor,
        color: color,
        height: height,
        width: width,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
