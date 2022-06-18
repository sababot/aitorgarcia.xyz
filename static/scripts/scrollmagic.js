$(function() {
  var controller = new ScrollMagic.Controller();

  // About
  var scene = new ScrollMagic.Scene({
    triggerElement: "#scrolldown",
    duration: (jQuery(window).height() * 1)
  })
  .setTween("#about", 0.5, {x: 0})
  .addTo(controller);

  // About
  var scene = new ScrollMagic.Scene({
    triggerElement: "#about-end",
    duration: (jQuery(window).height() * 1)
  })
  .setTween("#skills", 0.5, {x: 0})
  .addTo(controller);

  // Recent
  var scene = new ScrollMagic.Scene({
    triggerElement: "#skills-end",
    duration: (jQuery(window).height() * 1)
  })
  .setTween("#recent", 0.5, {x: 0})
  .addTo(controller);

  // Contact
  var scene = new ScrollMagic.Scene({
    triggerElement: "#recent-end",
    duration: (jQuery(window).height() * 1)
  })
  .setTween("#contact", 0.5, {x: 0})
  .addTo(controller);

  // Skills Reveal
  var scene = new ScrollMagic.Scene({
    triggerElement: "#about-end-2",
    duration: 0
  })
  .setTween("#level-algorithms", 0.5, {width: '90%'})
  .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#about-end-2",
    duration: 0
  })
  .setTween("#level-ai", 0.5, {width: '75%'})
  .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#about-end-2",
    duration: 0
  })
  .setTween("#level-graphics", 0.5, {width: '60%'})
  .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#about-end-2",
    duration: 0
  })
  .setTween("#level-web", 0.5, {width: '55%'})
  .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#about-end-2",
    duration: 0
  })
  .setTween("#level-blockchain", 0.5, {width: '35%'})
  .addTo(controller);
});