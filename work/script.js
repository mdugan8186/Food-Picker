'use strict';

const answer = function (restaurant) {
  document.querySelector('.answer').textContent = restaurant;
};

document.querySelector('.btn').addEventListener('click', function () {
  const num = Math.floor(Math.random() * 8);

  if (num === 0) {
    answer('Chipotle');
  } else if (num === 1) {
    answer('Newtown Square Pizza');
  } else if (num === 2) {
    answer('Euro Pizza');
  } else if (num === 3) {
    answer('Wawa');
  } else if (num === 4) {
    answer('Cut Above');
  } else if (num === 5) {
    answer('Next Door');
  } else if (num === 6) {
    answer('Uno');
  }
});

document.querySelector('.clear').addEventListener('click', function () {
  answer('');
});
