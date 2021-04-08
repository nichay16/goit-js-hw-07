// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elementsList = document.querySelector('#ingredients');

const makeIngredientsList = ingredients => {
  return ingredients.map(element => {
    const listItem = document.createElement('li');
    listItem.textContent = element;

    return listItem;
  });
};

const elements = makeIngredientsList(ingredients);

elementsList.append(...elements);

// через map без функции 
// const newElementsList = ingredients.map(element => {
//     const listItem = document.createElement('li');
//     listItem.textContent = element;

//     return listItem;
// });

// console.log(newElementsList);

// elementsList.append(...newElementsList);


// вариант с for
// const newElementsList = [];

// for (let i = 0; i < ingredients.length; i++) {
//     const element = ingredients[i];
//     // console.log(ingredients[i]);

//     const listItem = document.createElement('li');

//     console.log(listItem);

//     listItem.textContent = element;

//     newElementsList.push(listItem);
// }

// console.log(elementsList);

// elementsList.append(...newElementsList)
