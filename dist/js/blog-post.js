var pinning = new ScrollMagic.Controller();

$(function() {
  // build a pinning scence
  var pin1 = new ScrollMagic.Scene({
    triggerElement: '.breadcrumbs',
    duration: 0,
    triggerHook: 0,
    offset: -73
  })

    .setPin('.breadcrumbs')
    .setClassToggle('.breadcrumbs', 'white')

    .addTo(pinning);
});

var adpin = new ScrollMagic.Controller();

$(function() {
  // build a adpin scence
  var pin2 = new ScrollMagic.Scene({
    triggerElement: '#longads',
    duration: 2000,
    triggerHook: 0,
    offset: -80
  })

    .setPin('#longads')

    .addTo(adpin);
});

// Navigation Image Slide

var imageSlideSmall = new ScrollMagic.Controller();

var imageSM = new ScrollMagic.Scene({
  triggerElement: 'section',
  triggerHook: 0
})
  .setClassToggle('.smallImage', 'd-appear')

  .addTo(imageSlideSmall);

var imageSlideBig = new ScrollMagic.Controller();

var imageSM = new ScrollMagic.Scene({
  triggerElement: 'section',
  triggerHook: 0
})

  .setClassToggle('.bigImage', 'd-zero')

  .addTo(imageSlideBig);

document.getElementById('armisfin').onclick = function() {
  location.href = 'https://armisfinancial.com';
};
