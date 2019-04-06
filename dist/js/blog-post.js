var pinning = new ScrollMagic.Controller();

$(function () {
  // build a pinning scence
  var pin1 = new ScrollMagic.Scene({
      triggerElement: ".breadcrumbs",
      duration: 0,
      triggerHook: .12

    })

    .setPin(".breadcrumbs")
    .addIndicators()
    .addTo(pinning);

});