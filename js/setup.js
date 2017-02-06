'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupWizardForm = setup.querySelector('.setup-wizard-form');
var getColorIndex = -1;
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

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

wizardCoat.addEventListener('click', function () {
  var colorIndexCoat = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorIndexCoat];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[colorIndex(wizardEyesColors)];
});

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.background = setupFireballWrapColor[colorIndex(setupFireballWrapColor)];
});

function colorIndex(array) {
  if (getColorIndex < array.length - 1) {
    getColorIndex = getColorIndex + 1;
  } else {
    getColorIndex = 0;
  }
  return getColorIndex;
}

var isEnter = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var onSetupKeydown = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
};

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
};

setupOpen.addEventListener('click', function () {
  showSetupElement();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (isEnter(evt)) {
    showSetupElement();
  }
});

setupClose.addEventListener('click', function () {
  hideSetupElement();
});

setupClose.addEventListener('keydown', function (evt) {
  if (isEnter(evt)) {
    hideSetupElement();
  }
});

setupWizardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

setupSubmit.addEventListener('click', hideSetupElement);

setupSubmit.addEventListener('keydown', function (evt) {
  if (isEnter(evt)) {
    hideSetupElement();
  }
});
