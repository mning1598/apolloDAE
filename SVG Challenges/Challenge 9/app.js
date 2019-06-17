var path = document.querySelector("path");
var l = path.getTotalLength();

TweenMax.set(path, { strokeDasharray: l });
TweenMax.fromTo(path, 1, { strokeDashoffset: l }, { strokeDashoffset: 0 });
