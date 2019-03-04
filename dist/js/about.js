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
  .addIndicators()
  .addTo(nav);


var black = new ScrollMagic.Controller();

var blacknav = new ScrollMagic.Scene({
    triggerElement: ".jumbotron h1",
    triggerHook: .1
  })
  .setClassToggle("#black", "appear")
  .addIndicators()
  .addTo(black);

var white = new ScrollMagic.Controller();

var whitenav = new ScrollMagic.Scene({
    triggerElement: ".jumbotron h1",
    triggerHook: .1
  })
  .setClassToggle("#white", "invisible")
  .addIndicators()
  .addTo(white);