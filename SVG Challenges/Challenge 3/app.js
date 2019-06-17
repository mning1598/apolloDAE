var tl = new TimelineMax({
  repeat: -1,
  yoyo: true
});

tl.to(obj1, 1, { scale: 0.5, transformOrigin: "50% 50%", strokeWidth: "12" });
