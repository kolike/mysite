window.addEventListener('DOMContentLoaded', function () {
  const tabs = require('./modules/tabs'),
    modalWindow = require('./modules/modalWindow'),
    timer = require('./modules/timer'),
    cards = require('./modules/cards'),
    forms = require('./modules/forms'),
    calc = require('./modules/calc'),
    slider = require('./modules/slider');
  tabs();
  timer();
  modalWindow();
  cards();
  forms();

  slider();
  calc();
});
