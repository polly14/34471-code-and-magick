'use strict';

var ENTER_KEY_CODE = 13;

window.isEnter = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

window.colorizeElement = function (element, colors, property) {
  var currentColor = colors[0];
  element.addEventListener('click', function () {
    var newColor = window.getRandomElementExcept(colors, currentColor);
    currentColor = newColor;
    element.style[property] = currentColor;
  });
  element.addEventListener('keydown', function (evt) {
    if (window.isEnter(evt)) {
      var newColor = window.getRandomElementExcept(colors, currentColor);
      currentColor = newColor;
      element.style[property] = currentColor;
    }
  });
};

