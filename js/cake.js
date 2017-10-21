$(window).load(function () {
  $('#name').html(window.atob($_GET('name')));
  $('#msg').html(window.atob($_GET('msg')));

});
