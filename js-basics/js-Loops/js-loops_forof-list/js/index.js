console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];
for (const language of programmingLanguages) {
  console.log(language);

  const li = document.createElement("li");
  li.textContent = language;
  ol.append(li);
  console.log(li);
}
// --v-- write/change code here --v--

// --^-- write/change code here --^--
