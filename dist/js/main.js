// Rule 4 Clock Display
// Date for Header

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

let today = new Date();
let date = (monthNames[today.getMonth()]) + '-' + today.getDate() + '-' + today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);

}
showTime();

document.getElementById('date').innerHTML = date;
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

// Clickable cards that go to different links

document.getElementById("wmod").onclick = function () {
  location.href = "wealth-mods-101.html";
};
document.getElementById("rmod").onclick = function () {
  location.href = "retirement-mod-calculator";
};
document.getElementById("rskmod").onclick = function () {
  location.href = "risk-profile-mod-calculator.html";
};
document.getElementById("fmod").onclick = function () {
  location.href = "financial-planning-mods.html";
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