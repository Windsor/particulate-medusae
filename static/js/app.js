require('js/application/App');
require('js/utils/*');
require('js/components/*');
require('js/constraints/*');
require('js/forces/*');
require('js/materials/*');
require('js/post-processing/*');
require('js/items/*');
require('js/controllers/*');
require('js/scenes/*');

setTimeout(function setup() {
  var DEBUG = false;
  if (DEBUG && location.search.indexOf('test=true') > -1) {
    App.run('tests');
  } else {
    App.run('index');
    App.log('Particulate.js ' + Particulate.VERSION);
  }
  jQuery('#toggle-info_pl').trigger('click');
  jQuery('#toggle-info_en').on('click', function() {
    console.log('info_en');
    jQuery('#info_en').toggleClass('active');
    jQuery('#info_pl').removeClass('active');
    jQuery('title').text('we turn small things into masterpieces');
  });
  jQuery('#toggle-info_pl').on('click', function() {
    console.log('info_pl');
    jQuery('#info_pl').toggleClass('active');
    jQuery('#info_en').removeClass('active');
    jQuery('title').text('tworzymy wielkie dzieła z małych rzeczy');
  });
  jQuery('.label').css({'opacity':1, 'visibility':'visible'});
  jQuery('#toggle-info_pl').click();
  jQuery('body').on('mousemove', function() {
    //
    var MainScene = App.MainScene;
    MainScene
  });
  var MainScene = App.MainScene;
}, 0);
