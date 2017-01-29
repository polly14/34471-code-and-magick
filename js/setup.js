'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

var wizardCoat = document.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

wizardCoat.addEventListener('click', function () {
  var colorIndexCoat = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorIndexCoat];
});

var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getColorIndex = -1;
function colorIndex(array) {
  if (getColorIndex < array.length - 1) {
    getColorIndex = getColorIndex + 1;
  } else {
    getColorIndex = 0;
  }
  return getColorIndex;
}

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[colorIndex(wizardEyesColors)];
});

var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupFireballWrapColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.background = setupFireballWrapColor[colorIndex(setupFireballWrapColor)];
});

