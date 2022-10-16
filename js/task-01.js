const quantityCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${quantityCategoriesEl.length}`);
console.log(quantityCategoriesEl);

const category = [...quantityCategoriesEl].map(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.querySelectorAll('li').length}`);
});
