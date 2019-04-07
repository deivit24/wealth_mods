var pinning = new ScrollMagic.Controller();

$(function () {
  // build a pinning scence
  var pin1 = new ScrollMagic.Scene({
      triggerElement: ".breadcrumbs",
      duration: 0,
      triggerHook: 0,
      offset: -121.45

    })

    .setPin(".breadcrumbs")
    .setClassToggle(".breadcrumbs", "white")
    .addIndicators()
    .addTo(pinning);

});