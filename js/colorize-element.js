'use strict';


/*
window.colorizeElement = function (element, colors, property) {
  var currentColor = colors[0];
  element.addEventListener('click', function () {
    var newColor = window.utils.getRandomElementExcept(colors, currentColor);
    currentColor = newColor;
    element.style[property] = currentColor;
  });
  element.addEventListener('keydown', function (evt) {
    if (window.utils.isEnter(evt)) {
      var newColor = window.utils.getRandomElementExcept(colors, currentColor);
      currentColor = newColor;
      element.style[property] = currentColor;
    }
  });
};
*/

window.colorizeElement = function (element, colors, callback) {
  var currentColor = colors[0];
  element.addEventListener('click', function () {
    var newColor = window.utils.getRandomElementExcept(colors, currentColor);
    currentColor = newColor;
    if (typeof callback === 'function') {
      callback(newColor);
    }
  });
  element.addEventListener('keydown', function (evt) {
    if (window.utils.isEnter(evt)) {
      var newColor = window.utils.getRandomElementExcept(colors, currentColor);
      currentColor = newColor;
      if (typeof callback === 'function') {
        callback(newColor);
      }
    }
  });

};

