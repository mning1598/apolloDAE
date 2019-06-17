var windowW = window.outerWidth;

var o1 = document.getElementById("obj1");
var box1 = document.getElementById("pt1");
var dist1 = box1.offsetWidth - (windowW - box1.offsetWidth) / 2;

var first = TweenMax.to(o1, 1, { x: dist1 - 25, paused: true });
o1.onclick = function() {
  first.play();
};

var tl1 = new TimelineMax({ paused: true });

var o2 = document.getElementById("obj2");
var o3 = document.getElementById("obj3");

tl1.to(o2, 1, { x: dist1 - 25 }).to(o3, 1, { x: dist1 - 25 });

o2.onclick = function() {
  tl1.restart();
};

var o4 = document.getElementById("obj4");
var fourth = TweenMax.to(o4, 1, { x: dist1 - 25, paused: true });
o4.ondblclick = function() {
  fourth.restart();
};
