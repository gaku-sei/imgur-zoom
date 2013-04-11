var $panelLeft = $('.panel.left');
var leftPanelPixels = $panelLeft.outerWidth(true) + $panelLeft.offset().left;

$('body').append($('<div>').attr('id', 'zoom-imgur-modal').
  css({left: leftPanelPixels, position: 'absolute', 'z-index': 9999}).
  append($('<img>').css({border: '5px solid black'})).hide());

var $modal = $('#zoom-imgur-modal');

var displayModal = function(e) {
  var width = screen.availWidth - leftPanelPixels - 40;
  $modal.css('top', window.scrollY + 50).
    find('img').attr({src: e.target.src.replace('b.', '.'), width: width});
  $modal.show();
};

$('#imagelist').on({mouseover: displayModal, mouseout: function(){$modal.hide()}}, '.post img');
