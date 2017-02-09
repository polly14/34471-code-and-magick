'use strict';

var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
  return array[randomElementIndex];
};

window.getRandomElementExcept = function (array, firstElement) {
  var secondElement;
  while (!secondElement || secondElement === firstElement) {
    secondElement = getRandomElement(array);
  }
  return secondElement;
};

