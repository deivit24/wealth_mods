var pinning = new ScrollMagic.Controller();

$(function () {
  // build a pinning scence
  var pin1 = new ScrollMagic.Scene({
      triggerElement: ".breadcrumbs",
      duration: 0,
      triggerHook: 0,
      offset: -73

    })

    .setPin(".breadcrumbs")
    .setClassToggle(".breadcrumbs", "white")

    .addTo(pinning);

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