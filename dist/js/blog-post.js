var pinning = new ScrollMagic.Controller();

$(function () {
  // build a pinning scence
  var pin1 = new ScrollMagic.Scene({
      triggerElement: ".sub",
      duration: 0,
      triggerHook: .1

    })

    .setPin(".breadcrumbs")
    .addIndicators()
    .addTo(pinning);

});