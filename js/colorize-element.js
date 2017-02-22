'use strict';

(function () {
  window.colorizeElement = function (element, colors, callback) {
    var currentColor = colors[0];
    var colorize = function (cbClear, callbackWizards) {
      var newColor = window.utils.getRandomElementExcept(colors, currentColor);
      currentColor = newColor;
      if (typeof callback === 'function') {
        callback(element, newColor);
      }
      if (typeof cbClear === 'function') {
        cbClear();
      }
      if (typeof callbackWizards === 'function') {
        callbackWizards();
      }
    };
    element.addEventListener('click', function () {
      colorize(clearTimeout(window.timeOutWizards), window.renderNewFive);
    });
    element.addEventListener('keydown', function (evt) {
      if (window.utils.isEnter(evt)) {
        colorize(clearTimeout(window.timeOutWizards), window.renderNewFive);
      }
    });
  };
})();

