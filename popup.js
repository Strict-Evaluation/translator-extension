'use strict';

let fromLang = null;
let toLang = null;
let submit = null;

window.onload = () => {
  fromLang = document.getElementById('fromlang');
  toLang = document.getElementById('tolang');
  submit = document.getElementById('submit');
  
  submit.onclick = () => {
    browser.runtime.sendMessage({
      fromLang: fromLang.value,
      toLang: toLang.value
    });
  }
};
