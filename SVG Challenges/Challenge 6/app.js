var tl = new TimelineMax({ repeat: -1, yoyo: true });
tl.to(obj1, 1.5, { opacity: 1 })
  .to(obj2, 1.5, { opacity: 1 }, 0)
  .to(obj3, 1.5, { opacity: 1 }, 0)
  .to(obj4, 1.5, { opacity: 1 }, 0);
