$(function(){
  $('#favorite').hover(changeBlue);
  $('#form').keydown(function(event) {
    if (event.which == 84) {
      $('h1:first').toggle(900);
    }
  });
  $('#form').keyup(function(event) {
    if (event.which == 84) {
      $('h1:first').show();
    }
  });
  // $(window).resize(function() {
  //   alert("I seent that");
  // });
})

function changeBlue() {
  $(this).toggleClass("blue");
}
