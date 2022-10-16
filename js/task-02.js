const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsEl = document.querySelector('#ingredients');
const addIngridients = ingredients.map(ingridient => {
  const ingridientToEl = document.createElement('li');
  ingridientToEl.textContent = ingridient;
  ingridientToEl.classList.add('item');
  return ingridientToEl;
});
ingredientsEl.append(...addIngridients);
console.log(ingredientsEl);
