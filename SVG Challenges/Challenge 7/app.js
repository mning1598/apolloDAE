var tl = new TimelineMax({ repeat: -1, yoyo: true });

tl.to(obj1, 1, { strokeWidth: 50, stroke: "red", fill: "purple" })
  .to(obj2, 1, { strokeWidth: 50, stroke: "red", fill: "purple" }, 0)
  .to(obj3, 1, { strokeWidth: 50, stroke: "red", fill: "purple" }, 0);
