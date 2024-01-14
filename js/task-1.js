const allCategories = document.getElementById("categories");
const allItems = allCategories.children;
console.log(`Numbers of categories: ${allItems.length}`);
const categoryName = allCategories.querySelectorAll(".item");
categoryName.forEach((name) => {
  const names = name.firstElementChild;
  console.log(`Category: ${names.textContent}`);
  const elemNumber = names.nextElementSibling;
  elemNumber.querySelectorAll("li");
  console.log(`Elements: ${elemNumber.children.length}`);
});
