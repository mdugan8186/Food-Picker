'use strict';

const answer = function (restaurant) {
  document.querySelector('.answer').textContent = restaurant;
};

document.querySelector('.btn').addEventListener('click', function () {
  const num = Math.floor(Math.random() * 12);

  if (num === 0) {
    answer("Gus's");
  } else if (num === 1) {
    answer("Pat's");
  } else if (num === 2) {
    answer('Taco Bell');
  } else if (num === 3) {
    answer('Burger King');
  } else if (num === 4) {
    answer("McDonald's");
  } else if (num === 5) {
    answer('Wawa');
  } else if (num === 6) {
    answer("Domino's");
  } else if (num === 7) {
    answer('Pizza Hut');
  } else if (num === 8) {
    answer('Sicilias');
  } else if (num === 9) {
    answer('Roman Pantry');
  } else if (num === 10) {
    answer('KFC');
  }
});

document.querySelector('.clear').addEventListener('click', function () {
  answer('');
});
