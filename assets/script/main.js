$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("nav").addClass("scrolled");
  }
  if (scroll < 100) {
    $("nav").removeClass("scrolled");
  }
});

window.onload = function addShared() {
  var nav = `
      <p><a>menu</a></p>
      <p><a>custom</a></p>
      <a href='index.html'><img src='assets/images/fix-logo.png' alt='FIX Cakes'></a>
      <p><a>about</a></p>
      <p><a>hours</a></p>
    `;
  document.getElementById("nav").innerHTML = nav;

  var footer = `
      <div class=even>
        <p>
          27 Maryland Plaza
          <br>
          Saint Louis, MO 63108
        </p>
        <p>
          Tues-Sat 7am-7pm, Sun 11am-4pm
        </p>
      </div>
      <div class=even>
        <img src='assets/images/fix-logo-white.png' alt=''>
      </div>
      <div class=even>
        <div class=media>
          <img src='assets/images/fix-fbicon.png' alt='facebook'>
          <img src='assets/images/fix-twittericon.png' alt='twitter'>
          <img src='assets/images/fix-instaicon.png' alt='instagram'>
        </div>
        <p>
          314-930-3103
        </p>
      </div>
    `;
  document.getElementById("footer").innerHTML = footer;

}
