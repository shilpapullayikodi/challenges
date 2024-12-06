import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Submit</Button>
      <Button>Welcome</Button>
      <Button>Login</Button>
      <Button>Answer</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
