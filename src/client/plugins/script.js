/*================================================================================
  Item Name: Materialize - Material Design Admin Template
  Version: 2.1
  Author: GeeksLabs
  Author URL: http://www.themeforest.net/user/geekslabs
================================================================================*/

/* Searchbar - Function ================================================================================================
*  You can manage the search bar
*  
*/

$(function () {

  "use strict";

  var window_width = $(window).width();

  Waves.init();
  setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 100);

  
  //Search button click event
  $('.js-search').on('click', function () {
    $('.search-bar').addClass('open');
    $('.search-bar').find('input[type="text"]').focus();
  });

  //Close search click event
  $('.search-bar').find('.close-search').on('click', function () {
    $('.search-bar').removeClass('open');
    $('.search-bar').find('input[type="text"]').val('');
  });

  //ESC key on pressed
  $('.search-bar').find('input[type="text"]').on('keyup', function (e) {
    if (e.keyCode == 27) {
      $('.search-bar').removeClass('open');
      $('.search-bar').find('input[type="text"]').val('');
    }
  });



}); // end of document ready