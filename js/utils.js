'use strict';

var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
  return array[randomElementIndex];
};

window.getRandomElementExcept = function (array, oneElement) {
  var twoElement;
  while (!twoElement || twoElement === oneElement) {
    twoElement = getRandomElement(array);
  }
  return twoElement;
};

