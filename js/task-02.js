const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Pobierz element ul#ingredients z dokumentu
const ulElement = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");

  liElement.textContent = ingredient;

  liElement.classList.add("item");

  ulElement.appendChild(liElement);
});
