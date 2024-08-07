console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
  tosError.removeAttribute("hidden", "");
}

function showTosError() {}

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden", "");
}

hideTosError();
hideSuccessMessage();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //console.log(event.target.elements.tos.value)
  const formElements = event.target.elements;
  //const data = Object.fromEntries(FormData);
  const tos = formElements.tos.checked;

  if (!tos) {
    showTosError();
    hideSuccessMessage();
    return;
  }
  hideTosError();
  showSuccessMessage();

  // --v-- write your code here --v--

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
