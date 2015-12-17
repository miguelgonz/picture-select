var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;
global.localStorage = {
    getItem: function () {return '{}';},
    setItem: function () {},
    deleteItem: function () {}
};
