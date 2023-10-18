'use strict';

const answer = function (restaurant) {
  document.querySelector('.answer').textContent = restaurant;
};

document.querySelector('.btn').addEventListener('click', function () {
  const num = Math.floor(Math.random() * 10);

  if (num === 0) {
    answer("Mama's Meatballs");
  } else if (num === 1) {
    answer("Pat's");
  } else if (num === 2) {
    answer("Chickie's & Pete's");
  } else if (num === 3) {
    answer('On the Border');
  } else if (num === 4) {
    answer('Mexican Food Factory');
  } else if (num === 5) {
    answer("Lascala's Fire");
  } else if (num === 6) {
    answer('Redstone');
  } else if (num === 7) {
    answer('Cheesecake Factory');
  } else if (num === 8) {
    answer("Maggiano's");
  }
});

document.querySelector('.clear').addEventListener('click', function () {
  answer('');
});
