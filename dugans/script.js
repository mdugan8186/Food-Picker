'use strict';

// document.querySelector(".answer").textContent = "Burger King";

const answer = function (restaurant) {
  document.querySelector('.answer').textContent = restaurant;
};

document.querySelector('.btn').addEventListener('click', function () {
  const num = Math.floor(Math.random() * 13);
  if (num === 0) {
    answer('Burger King');
  } else if (num === 1) {
    answer('Villa Rose');
  } else if (num === 2) {
    answer('Pizza Hut');
  } else if (num === 3) {
    answer("Domino's");
  } else if (num === 4) {
    answer('Cheesecake Factory');
  } else if (num === 5) {
    answer('On the Border');
  } else if (num === 6) {
    answer("McDonald's");
  } else if (num === 7) {
    answer('Wawa');
  } else if (num === 8) {
    answer('Chipolte');
  } else if (num === 9) {
    answer('Taco Bell');
  } else if (num === 10) {
    answer('IHOP');
  } else if (num === 11) {
    answer("Chickie's & Pete's");
  }
});

document.querySelector('.clear').addEventListener('click', function () {
  answer('');
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
