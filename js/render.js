'use strict';

window.render = (function () {
  var wizardTemplate = document.querySelector('.setup-wizard-wrap');

  return function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.setAttribute('title', wizard.name);
    var name = document.createElement('p');
    name.textContent = wizard.name;
    wizardElement.appendChild(name);

    var svgElement = wizardElement.children[0];
    svgElement.style.position = 'static';
    svgElement.style.width = 50;
    svgElement.style.height = 50;
    var wizardCoat = svgElement.querySelector('#wizard-coat');
    var wizardEyes = svgElement.querySelector('#wizard-eyes');
    wizardCoat.setAttribute('class', 'wizard-coat');
    wizardEyes.setAttribute('class', 'wizard-eyes');
    wizardCoat.removeAttribute('#wizard-coat');
    wizardEyes.removeAttribute('#wizard-eyes');

    svgElement.querySelector('#wizard-coat').style.fill = wizard.color_coat;
    svgElement.querySelector('#wizard-eyes').style.fill = wizard.color_eyes;

    return wizardElement;
  };

})();

