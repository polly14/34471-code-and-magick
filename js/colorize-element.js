'use strict';

window.colorizeElement = function (element, colors, callback) {
  var currentColor = colors[0];
  element.addEventListener('click', function () {
    var newColor = window.utils.getRandomElementExcept(colors, currentColor);
    currentColor = newColor;
    if (typeof callback === 'function') {
      callback(element, newColor);
    }
  });
  element.addEventListener('keydown', function (evt) {
    if (window.utils.isEnter(evt)) {
      var newColor = window.utils.getRandomElementExcept(colors, currentColor);
      currentColor = newColor;
      if (typeof callback === 'function') {
        callback(element, newColor);
      }
    }
  });

};

