// var leftarm = document.getElementById("leftarm");
TweenMax.to(leftarm, 0.4, {
  attr: {
    d:
      " M 595.406 350 C 606.671 349.428 616.489 342.661 671 330.458 L 671 330.458"
  },
  repeat: -1,
  yoyo: true,
  opacity: 0.75,
  ease: Power1.easeInOut
});

TweenMax.to(rightarm, 0.4, {
  attr: {
    d:
      " M 551 350 C 539.735 349.428 529.917 342.661 475.406 330.458 L 475.406 330.458"
  },
  repeat: -1,
  yoyo: true,
  opacity: 0.75,
  ease: Power1.easeInOut
});

TweenMax.to(head, 0.45, {
  y: 10,
  repeat: -1,
  yoyo: true
});

TweenMax.to("#feTurb", 2, {
  attr: {
    baseFrequency: `${0.04} ${0.1}`
  },
  repeat: -1,
  yoyo: true
});
