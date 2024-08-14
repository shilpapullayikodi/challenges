// Store the cards in a global state
import { App } from "./components/App/App.js";
// const headerFuc = Header();
// const bookmarkButton = Bookmark(props);
// const cardList = CardList();
// root.append(headerFuc);
// cards.append(bookmarkButton);
// form.append(cards);

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
