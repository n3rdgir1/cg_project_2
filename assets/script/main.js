$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("nav").addClass("scrolled");
  }
  if (scroll < 100) {
    $("nav").removeClass("scrolled");
  }
});
