var tl = new TimelineMax({ repeat: -1, yoyo: true });

tl.to(obj1, 2, { scale: 0.5, transformOrigin: "50% 50%" }).to(
  obj1,
  1,
  {
    fill: "rgb(0,0,0)"
  },
  1
);
