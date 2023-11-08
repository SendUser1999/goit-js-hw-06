//______________Number of categories
const categoryList = document.getElementById("categories");
const listItem = document.querySelectorAll(".item");
console.log("number of categories:", listItem.length);
listItem.forEach((item) => {
    const categoryTitle = item.querySelector("h2");
    const categoryElements = item.querySelectorAll("li");

console.log(`Categories: ${categoryTitle.textContent} `);
console.log(`Elements: ${categoryElements.length}`);
});