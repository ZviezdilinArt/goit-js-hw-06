const categoriesEl = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesEl.children.length}`);
console.log(" ");

[...categoriesEl.children].forEach(element => {
    const category = element.querySelector('h2').textContent;
    const item = element.querySelectorAll(".item li").length;
    
    console.log(`Category: ${category}`);
    console.log("Elements: ",item);
    console.log(" ");
});