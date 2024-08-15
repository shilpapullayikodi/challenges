console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

//Part 1
/*  function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", "./assets/star-empty.svg");
    starContainer.append(img)
  }

  //--v-- your code here --v--

  //--^-- your code here --^--
} 
  renderStars();*/

//Part 2
/*function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    if (i <= filledStars) {
      img.setAttribute("src", "./assets/star-filled.svg");
    } else {
      img.setAttribute("src", "./assets/star-empty.svg");
    }
    starContainer.append(img);
  }
}

renderStars(3); */

//Part-3
/*function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    if (i <= filledStars) {
      img.setAttribute("src", "./assets/star-filled.svg");
    } else {
      img.setAttribute("src", "./assets/star-empty.svg");
    }
    starContainer.append(img);
  }
}

renderStars(3);*/

//Part 4
function renderStars(filledStars) {
  // reset the star container before rerendering stars

  starContainer.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    if (i <= filledStars) {
      img.setAttribute("src", "./assets/star-filled.svg");
    } else {
      img.setAttribute("src", "./assets/star-empty.svg");
    }
    img.setAttribute("onclick", `renderStars(${i})`);
    starContainer.append(img);
  }
}
renderStars(1);
