'use strict';

(function () {
  
  var wizardCoat = document.querySelector('#wizard-coat');
  var wizardEyes = document.querySelector('#wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var setupFireballWrapColor = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  window.colorizeElement(wizardCoat, wizardCoatColors, function(currentColor) {wizardCoat.style.fill = currentColor;});

  window.colorizeElement(wizardEyes, wizardEyesColors, function(currentColor) {wizardEyes.style.fill = currentColor;});

  window.colorizeElement(setupFireballWrap, setupFireballWrapColor, function(currentColor) {setupFireballWrap.style.background = currentColor;});
  
})();

window.enableSetup = (function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = document.querySelector('.setup-submit');
  var setupWizardForm = document.querySelector('.setup-wizard-form');  
  var onSetupKeydown = function (evt) {
    if (window.utils.isEscape(evt)) {
      setup.classList.add('invisible');
    }
  };
  var onSetupClose = null;

  var showSetupElement = function () {
    setup.classList.remove('invisible');
    document.addEventListener('keydown', onSetupKeydown);
    setupOpen.setAttribute('aria-pressed', 'true');
    setup.setAttribute('aria-hidden', 'false');
  };

  var hideSetupElement = function () {
    setup.classList.add('invisible');
    document.removeEventListener('keydown', onSetupKeydown);
    setupOpen.setAttribute('aria-pressed', 'false');
    setup.setAttribute('aria-hidden', 'true');
    setupClose.removeEventListener('keydown', onKeyDown);
    setupClose.removeEventListener('click', onClick);
    setupSubmit.removeEventListener('click', onClick);
    setupSubmit.removeEventListener('keydown', onKeyDown);

    if (typeof onSetupClose === 'function') {
      onSetupClose();
    }
  };

  var onClick = function () {
    hideSetupElement();
  };

  var onKeyDown = function (evt) {
    if (window.utils.isEnter(evt)) {
      hideSetupElement();
    }
  };

  setupWizardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

  return function (cb) {
    showSetupElement();
    setupClose.addEventListener('keydown', onKeyDown);
    setupClose.addEventListener('click', onClick);
    setupSubmit.addEventListener('click', onClick);
    setupSubmit.addEventListener('keydown', onKeyDown);
    onSetupClose = cb;
  };

})();

(function () {
  var setupOpen = document.querySelector('.setup-open-icon');

  setupOpen.addEventListener('click', function () {
    window.enableSetup();
  });

  var focusOpenButton = function () {
    setupOpen.focus();
  };

  var onSetupKeydown = function (evt) {
    if (window.utils.isEnter(evt)) {
      window.enableSetup(focusOpenButton);
    }
  };

  setupOpen.addEventListener('keydown', onSetupKeydown);

})();
