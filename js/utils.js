'use strict';

window.utils = (function () {
  
  var ENTER_KEY_CODE = 13;

  var isEnter = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };
  
  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var getRandomElementExcept = function (array, firstElement) {
    var secondElement;
    while (!secondElement || secondElement === firstElement) {
      secondElement = getRandomElement(array);
    }
    return secondElement;
  };
  
  return {
    isEnter: isEnter,
    getRandomElementExcept: getRandomElementExcept
  };
  
})();

