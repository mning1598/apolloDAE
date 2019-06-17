var tl = new TimelineLite();
tl.to(car, 2, { x: 450 })
  .to(man, 1, { x: -150 }, 1)
  .to(car, 0.75, { y: -192 }, 2)
  .to(lift, 0.75, { y: -192 }, 2);
