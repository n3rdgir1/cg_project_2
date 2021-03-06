$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("nav").addClass("scrolled");
  }
  if (scroll < 100) {
    $("nav").removeClass("scrolled");
  }
});

function page() {
  return window.location.pathname.split("/").pop().split(".")[0];
}

function activeNav(navItem) {
  if(page() === navItem)
    return 'active';
  else
    return '';
}

function headerFooter() {
  var nav = `
      <p class=${activeNav('menu')}><a href='menu.html'>menu</a></p>
      <p class=${activeNav('custom')}><a href='custom.html'>custom</a></p>
      <a href='index.html'><img src='assets/images/fix-logo.png' alt='FIX Cakes'></a>
      <p class=${activeNav('about')}><a href='about.html'>about</a></p>
      <p class=${activeNav('hours')}><a href='hours.html'>hours</a></p>
    `;
  document.getElementById("nav").innerHTML = nav;

  $("body").addClass(page());

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
window.onload = headerFooter();
