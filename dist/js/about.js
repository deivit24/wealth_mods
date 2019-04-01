// making cards in start here page a link!

document.getElementById('about').onclick = function() {
  location.href = 'about.html';
};
document.getElementById('tool').onclick = function() {
  location.href = 'tool.html';
};
document.getElementById('blog').onclick = function() {
  location.href = 'mods/wealth-mods-101.html';
};

// var nav = new ScrollMagic.Controller();

// var navscene = new ScrollMagic.Scene({
//     triggerElement: '.jumbotron h1',
//     triggerHook: 0.1
//   })
//   .setClassToggle('.navbar', 'bg-white')

//   .addTo(nav);

// var black = new ScrollMagic.Controller();

// var blacknav = new ScrollMagic.Scene({
//     triggerElement: '.jumbotron h1',
//     triggerHook: 0.1
//   })
//   .setClassToggle('#black', 'appear')

//   .addTo(black);

// var white = new ScrollMagic.Controller();

// var whitenav = new ScrollMagic.Scene({
//     triggerElement: '.jumbotron h1',
//     triggerHook: 0.1
//   })
//   .setClassToggle('#white', 'invisible')

//   .addTo(white);

// var navcolors = new ScrollMagic.Controller();

// $('.nav-link').each(function () {
//   var navColors = new ScrollMagic.Scene({
//       triggerElement: '.jumbotron h1',
//       triggerHook: 0.0
//     })
//     .setClassToggle(this, 'dark')

//     .addTo(navcolors);
// });

// var aboutActive = new ScrollMagic.Controller();

// var aboutActivenav = new ScrollMagic.Scene({
//     triggerElement: '.jumbotron h1',
//     triggerHook: 0.0
//   })
//   .setClassToggle('.about-active', 'about-active-dark')

//   .addTo(aboutActive);

// why are you here scroll magic

var why = new ScrollMagic.Controller();

var aboutwhy = new ScrollMagic.Scene({
  triggerElement: '#why',
  triggerHook: 0.8
})
  .setClassToggle('#why', 'why-appear')

  .addTo(why);

// Confused Picture slide

var confused = new ScrollMagic.Controller();

var aboutconfused = new ScrollMagic.Scene({
  triggerElement: '#why',
  triggerHook: 0.8
})
  .setClassToggle('#sec7 img', 'why-appear')

  .addTo(confused);

var confusedWords = new ScrollMagic.Controller();

var aboutconfusedWords = new ScrollMagic.Scene({
  triggerElement: '#why',
  triggerHook: 0.8
})
  .setClassToggle('#sec7 .col-md-8', 'why-appear')

  .addTo(confusedWords);

// Why I hated it

var hated = new ScrollMagic.Controller();

var abouthated = new ScrollMagic.Scene({
  triggerElement: '#hated',
  triggerHook: 0.8
})
  .setClassToggle('#hated', 'why-appear')

  .addTo(hated);

// Why I loved it

var love = new ScrollMagic.Controller();

var aboutlove = new ScrollMagic.Scene({
  triggerElement: '#loved',
  triggerHook: 0.8
})
  .setClassToggle('#loved', 'why-appear')

  .addTo(love);

// MY MISSION

var mission = new ScrollMagic.Controller();

var aboutmission = new ScrollMagic.Scene({
  triggerElement: '#mission',
  triggerHook: 0.8
})
  .setClassToggle('#mission', 'why-appear')

  .addTo(mission);

var sec10 = new ScrollMagic.Controller();

var aboutsec10 = new ScrollMagic.Scene({
  triggerElement: '#sec10',
  triggerHook: 0.8
})
  .setClassToggle('#sec10', 'why-appear')

  .addTo(sec10);

function expand1() {
  var element = document.getElementById('headingOne');
  element.classList.toggle('expand');
}

function expand2() {
  var element = document.getElementById('headingTwo');
  element.classList.toggle('expand');
}

function expand3() {
  var element = document.getElementById('headingThree');
  element.classList.toggle('expand');
}

function expand4() {
  var element = document.getElementById('headingFour');
  element.classList.toggle('expand');
}

function expand5() {
  var element = document.getElementById('headingFive');
  element.classList.toggle('expand');
}

function expand6() {
  var element = document.getElementById('headingSix');
  element.classList.toggle('expand');
}

function expand7() {
  var element = document.getElementById('headingSeven');
  element.classList.toggle('expand');
}

function expand8() {
  var element = document.getElementById('headingEight');
  element.classList.toggle('expand');
}
