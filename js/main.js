'use strict';

window.mainWizards = (function () {
  var getFiveRandomArray = function (array) {
    var fiveRandomElementArray = [];
    for (var i = 0; i < 5; i++) {
      var rand = window.utils.getRandomElement(array);
      fiveRandomElementArray.push(rand);
      array.splice(array.indexOf(rand), 1);
    }
    return fiveRandomElementArray;
  };

  var loadWizards = function () {
    window.load('https://intensive-javascript-server-dpgtdbwygf.now.sh/code-and-magick/data', function (data) {
      var wizards = data;
      var setupSimilar = document.querySelector('.setup-similar');
      setupSimilar.innerHTML = '';
      var fragment = document.createDocumentFragment();
      getFiveRandomArray(wizards).forEach(function (it) {
        fragment.appendChild(window.render(it));
      });
      setupSimilar.appendChild(fragment);
    });
  };
  var timeOutWizards;
  var renderNewFive = function () {
    clearTimeout(timeOutWizards);
    timeOutWizards = setTimeout(function () {
      loadWizards();
    }, 5000);
  };
  
  loadWizards();

  return {    
    renderNewFive: renderNewFive
  };

})();

