"use strict"

const categoryList = document.querySelector("ul");

const categoryListItems = categoryList.querySelectorAll("li.item");
console.log("Number of categories:", categoryListItems.length);
console.log("");

categoryListItems.forEach((item)=>{
    const categoryTitle = item.querySelector("h2").textContent;

    const categoryTitleSubItem = item.querySelectorAll("li");

    console.log("Category:", categoryTitle);
    console.log("Elements:", categoryTitleSubItem.length);
    console.log("");
});



