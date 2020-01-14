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
});
