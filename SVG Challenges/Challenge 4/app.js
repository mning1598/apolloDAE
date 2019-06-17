var dist1 = window.outerWidth - 100;

var tl = new TimelineMax();

tl.to(obj1, 3, { rotation: 360 }).to(obj1, 3, { x: dist1 }, 0);

var tl1 = new TimelineMax();

tl1.to(obj2, 3, { rotation: 360 }).to(obj2, 3, { x: dist1 }, 0);

var tl2 = new TimelineMax();

tl2.to(obj3, 3, { rotation: 360 }).to(obj3, 3, { x: dist1 }, 0);
