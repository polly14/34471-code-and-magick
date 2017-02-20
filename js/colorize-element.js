'use strict';

(function () {
  window.colorizeElement = function (element, colors, callback, callbackArrayWizards) {
    var currentColor = colors[0];
    var colorize = function () {
      var newColor = window.utils.getRandomElementExcept(colors, currentColor);
      currentColor = newColor;
      if (typeof callback === 'function') {
        callback(element, newColor);
      }
      if (typeof callbackArrayWizards === 'function') {
        setTimeout(callbackArrayWizards, 5000);
      }
    };
    element.addEventListener('click', function () {
      colorize();
    });
    element.addEventListener('keydown', function (evt) {
      if (window.utils.isEnter(evt)) {
        colorize();
      }
    });

  };
})();
