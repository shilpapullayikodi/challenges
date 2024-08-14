console.clear();
import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";
const root = document.getElementById("root");
const circleElement = Circle();
const pentagonElement = Pentagon();
const squareElement = Square();
root.append(circleElement, squareElement, pentagonElement);

//root.append(circle, square, pentagon);
