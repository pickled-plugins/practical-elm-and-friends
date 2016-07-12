var domReady = require('domready');
var Reveal = require('reveal.js');

require('reveal.js/css/reveal.css');
require('./theme.scss');

domReady(function() {
  Reveal.initialize({
    width: 1020,
    center: true,
    controls: false,
    transition: 'slide',
    margin: 0.15
  });
});
