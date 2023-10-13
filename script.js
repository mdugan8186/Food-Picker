'use strict';

// document.querySelector(".answer").textContent = "Burger King";

document.querySelector('.btn').addEventListener('click', function () {
  const num = Math.floor(Math.random() * 4);
  if (num === 0) {
    document.querySelector('.answer').textContent = 'Burger King';
  } else if (num === 1) {
    document.querySelector('.answer').textContent = 'Villa Rose';
  } else if (num === 2) {
    document.querySelector('.answer').textContent = 'Pizza Hut';
  } else if (num === 3) {
    document.querySelector('.answer').textContent = 'Dominos';
  }
});

document.querySelector('.clear').addEventListener('click', function () {
  document.querySelector('.answer').textContent = '';
});

/*
const foodPicker = function () {
  const num = Math.floor(Math.random() * 4);

  switch (num) {
    case 0:
      "Burger King";
      break;
    case 1:
      "Villa Rose";
      break;
    case 2:
      "Pizza Hut";
      break;
    case 3:
      "Domino's";
      break;
    default:
      "Something is not right";
  }
};

foodPicker();
*/

/*
const num = Math.floor(Math.random() * 4);

if (num === 0) {
  alert('Burger King');
} else if (num === 1) {
  alert('Villa Rose');
} else if (num === 2) {
  alert('Pizza Hut');
} else if (num == 3) {
  alert('Domino\'s');
} else {
  alert('Something is not right');
}
*/
