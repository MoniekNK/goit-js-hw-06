const categoryItems = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categoryItems.length);

categoryItems.forEach((categoryItem) => {
  const categoryName = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("li");
  console.log("Category:", categoryName);
  console.log("Elements:", categoryElements.length);
});
