var tl = new TimelineMax({ repeat: -1, yoyo: true });

tl.set(obj1, { strokeDasharray: 0 })
  .to(obj1, 1, {
    rotation: 360,
    transformOrigin: "50% 50%",
    strokeDashoffset: 5
  })
  .to(
    obj2,
    1,
    {
      rotation: 360,
      transformOrigin: "50% 50%",
      strokeDashoffset: 5
    },
    0
  );
