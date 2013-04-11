var displayModal = function(x, y, src) {
  var $modal = $('#zoom-imgur-modal');
  $modal.css({top: y, left: x, position: 'absolute'});
  $modal.find('img').attr('src', src.replace('b.', '.'));
  $modal.show();
}

$('body').append($('<div>').
  attr('id', 'zoom-imgur-modal').
  append($('<img>').
    css({border: '5px solid black'})).
  hide());

$('#imagelist').on({
  mouseover: function(e) {
    displayModal(e.pageX + 10, e.pageY + 10, e.target.src);
  },
  mouseout: function(e) {
    $('#zoom-imgur-modal').hide();
  }
}, '.post img');
