"use strict";

// const categoryList = document.querySelector("ul");

// const categoryListItems = categoryList.querySelectorAll("li.item");
// console.log("Number of categories:", categoryListItems.length);
// console.log("");

// categoryListItems.forEach((item)=>{
//     const categoryTitle = item.querySelector("h2").textContent;

//     const categoryTitleSubItem = item.querySelectorAll("li");

//     console.log("Category:", categoryTitle);
//     console.log("Elements:", categoryTitleSubItem.length);
//     console.log("");
// });

const categoriesList = document.querySelector("#categories");
const categories = categoriesList.children;

console.log(`Number of categories: ${categories.length}`);
console.log('');

for (let i = 0; i < categories.length; i++) {
  const category = categories[i];
  const categoryName = category.firstElementChild.textContent.trim();
  const categoryItems = category.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItems}`);
  console.log('');
}
