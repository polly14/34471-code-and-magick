'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var getColorIndex = -1;

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

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

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
