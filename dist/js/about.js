// making cards in start here page a link!

document.getElementById("about").onclick = function () {
  location.href = "about.html";
};
document.getElementById("tool").onclick = function () {
  location.href = "tool.html";
};
document.getElementById("blog").onclick = function () {
  location.href = "mods/wealth-mods-101.html";
};


var nav = new ScrollMagic.Controller();

var navscene = new ScrollMagic.Scene({
    triggerElement: ".jumbotron h1",
    triggerHook: .1
  })
  .setClassToggle(".navbar", "bg-white")

  .addTo(nav);


var black = new ScrollMagic.Controller();

var blacknav = new ScrollMagic.Scene({
    triggerElement: ".jumbotron h1",
    triggerHook: .1
  })
  .setClassToggle("#black", "appear")

  .addTo(black);

var white = new ScrollMagic.Controller();

var whitenav = new ScrollMagic.Scene({
    triggerElement: ".jumbotron h1",
    triggerHook: .1
  })
  .setClassToggle("#white", "invisible")

  .addTo(white);


var navcolors = new ScrollMagic.Controller();


$('.nav-link').each(function () {
  var navColors = new ScrollMagic.Scene({
      triggerElement: ".jumbotron h1",
      triggerHook: 0.0
    })
    .setClassToggle(this, 'dark')

    .addTo(navcolors);
});

var aboutActive = new ScrollMagic.Controller();

var aboutActivenav = new ScrollMagic.Scene({
    triggerElement: ".jumbotron h1",
    triggerHook: .0
  })
  .setClassToggle(".about-active", "about-active-dark")

  .addTo(aboutActive);

// why are you here scroll magic

var why = new ScrollMagic.Controller();

var aboutwhy = new ScrollMagic.Scene({
    triggerElement: "#why",
    triggerHook: .8
  })
  .setClassToggle("#why", "why-appear")

  .addTo(why);

// Confused Picture slide

var confused = new ScrollMagic.Controller();

var aboutconfused = new ScrollMagic.Scene({
    triggerElement: "#why",
    triggerHook: .8
  })
  .setClassToggle("#sec7 img", "why-appear")

  .addTo(confused);

var confusedWords = new ScrollMagic.Controller();

var aboutconfusedWords = new ScrollMagic.Scene({
    triggerElement: "#why",
    triggerHook: .8
  })
  .setClassToggle("#sec7 .col-md-8", "why-appear")

  .addTo(confusedWords);