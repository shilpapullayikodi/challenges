let data;

//data = undefined;

//data = NaN;

//data = 6;

//data = "Home Page";

//data = true;

//data = 9007199254740991n;

//data = function () {};
//data = null;

//data = {};
data = [1, 3, 6];
//data = Symbol();

switch (typeof data) {
  case "undefined":
    console.log("undefined");
    break;

  case "number":
    if (isNaN(data)) {
      console.log("Not a number!"); /* otherwise Nan returns number*/
    } else {
      console.log("Number!");
    }

    break;
  case "string":
    console.log("String!");
    break;
  case "boolean":
    console.log("Boolean!");
    break;
  case "bigint":
    console.log("bigint");
    break;
  case "function":
    console.log("function!");
    break;

  case "object":
    if (data === null) {
      console.log("null!");
    } else if (Array.isArray(data)) {
      console.log("array!");
    } else {
      console.log("object!");
    }
    break;

  default:
    console.log("I have no idea");
}
