$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });

  $('.special.cards .image').dimmer({
    on: 'hover'
  });

  $('.ui.search')
  .search({
    type: 'category'
  })
;

$('.ui.dropdown').dropdown({
  // dropdown withouth changing main
  action: 'hide'
});
});
