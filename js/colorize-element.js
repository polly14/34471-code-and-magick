'use strict';

(function () {
  window.colorizeElement = function (element, colors, callback) {
    var currentColor = colors[0];
    var colorize = function (callbackWizards) {
      var newColor = window.utils.getRandomElementExcept(colors, currentColor);
      currentColor = newColor;
      if (typeof callback === 'function') {
        callback(element, newColor);
      }
      if (typeof callbackWizards === 'function') {
        callbackWizards();
      }
    };
    element.addEventListener('click', function () {
      colorize(window.mainWizards.renderNewFive);
    });
    element.addEventListener('keydown', function (evt) {
      if (window.utils.isEnter(evt)) {
        colorize(window.mainWizards.renderNewFive);
      }
    });
  };
})();

