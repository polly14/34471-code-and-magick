'use strict';

window.getFiveRandomArray = function (array) {
  var fiveRandomElementArray = [];

  for (var i = 0; i < 5; i++) {
    var rand = window.utils.getRandomElement(array);
    fiveRandomElementArray.push(rand);
  }
  return fiveRandomElementArray;
};

(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  window.load('https://intensive-javascript-server-dpgtdbwygf.now.sh/code-and-magick/data', function (data) {
    var wizards = data;

    var fragment = document.createDocumentFragment();
    window.getFiveRandomArray(wizards).forEach(function (it) {
      fragment.appendChild(window.render(it));
    });
    setupSimilar.appendChild(fragment);

  });
})();
