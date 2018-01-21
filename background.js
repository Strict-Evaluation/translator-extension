'use strict';

/*global chrome:false*/

let fromLang = '#auto';
let toLang = 'en';

browser.runtime.onMessage.addListener(message => {
  fromLang = message.fromLang.length > 0 ? '#' + message.fromLang : '#auto';
  toLang = message.toLang;
});

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript({
    file: '/content.js'
  });
});

browser.contextMenus.create({
  id: 'translate-to-en',
  title: 'Translate',
  contexts: ['selection']  
}, () => {});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'translate-to-en') {
    const str = info.selectionText
      .replace(" ", "%20");
    browser.tabs.create({
      active: true,
      url: `https://translate.google.com/${fromLang}/${toLang}/${str}`
    });
  }
});
