// Scroll Magic Slides
var slides = new ScrollMagic.Controller();

$('.col-md-6').each(function () {
  var cardSlide = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7

    })
    .setClassToggle(this, 'card-appear')

    .addTo(slides);
});

var sec4slide = new ScrollMagic.Controller();

$('.col-4').each(function () {
  var cardSlide = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7
    })
    .setClassToggle(this, 'card-appear')

    .addTo(sec4slide);
});

// Accordian cards slide
var accordslide = new ScrollMagic.Controller();


$('.card-header').each(function () {
  var accordSlide = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7
    })
    .setClassToggle(this, 'card-appear')

    .addTo(accordslide);
});

// Rules slide

var rules = new ScrollMagic.Controller();

$('.rules').each(function () {
  var ruleSlide = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7
    })
    .setClassToggle(this, 'rules-appear')

    .addTo(rules);
});
// Clickable cards that go to different links

document.getElementById("wmod").onclick = function () {
  location.href = "mods/wealth-mods-101.html";
};
document.getElementById("rmod").onclick = function () {
  location.href = "mods/retirement-mod-calculator.html";
};
document.getElementById("rskmod").onclick = function () {
  location.href = "mods/risk-profile-mod-calculator.html";
};
document.getElementById("fmod").onclick = function () {
  location.href = "mods/financial-planning-mods.html";
};
document.getElementById("armismod").onclick = function () {
  location.href = "https://armisfinancial.com";
};



// Scoll Magic Smooth Scrolling
var controller = new ScrollMagic.Controller();

var tween = TweenMax.from("#sec2", 0.9, {
  autoAlpha: 0,
  scale: 0.7
});

var scene = new ScrollMagic.Scene({
    triggerElement: "#discover",
    duration: 500,
    triggerHook: .5
  })
  .setTween(tween)

  .addTo(controller);

controller.scrollTo(function (newpos) {
  TweenMax.to(window, 1, {
    scrollTo: {
      y: newpos
    }
  });
});

$(document).on("click", "a[href^='#']", function (e) {
  var id = $(this).attr("href");
  if ($(id).length > 0) {
    e.preventDefault();

    controller.scrollTo(id);

    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }
});