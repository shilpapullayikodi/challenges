import "./App.css";

export default function App() {
  return <Article />;
}
export function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Welcome</h2>
      <label htmlFor="pname">Place Name</label>
      <input id="pname" name="pname" type="text"></input>
      <a className="article__link" href="https://www.wikipedia.org/">
        Wikipedia
      </a>
    </article>
  );
}
