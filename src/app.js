/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');

var main = new UI.Card({
  title: 'Pebble Light Switch',
  icon: 'images/menu_icon.png',
  subtitle: 'A Smart Light Switch!',
  body: 'Use this application to control your lights! Press up button to start!',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'light on',
        icon: 'images/menu_icon.png',
      }, {
        title: 'ligth off',
        icon: 'images/menu_icon.png',
      }]
    }]
  });
  menu.on('select', function(e) {
   var URL='http://45.79.151.162:8080/setoff.jsp';
   if (e.item.title=='light on'){
      URL='http://45.79.151.162:8080/seton.jsp';
   }
      ajax({
        url : URL,
        type:'json',
      },
    function(data) {
      console.log(data);
    });
      
  });
  menu.show();
});