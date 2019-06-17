// var header = document.getElementById('header');
// var h1 = document.getElementsByTagName('h1');
// var intro = document.getElementsByClassName('intro');
// var firstItem = document.getElementsByClassName("list")[0].firstElementChild;
// var secondItem = document.getElementsByClassName("list")[0].children[1];
// // var lastItem = document.get

// TweenLite.to(firstItem, 1, { opacity: 0, x: 50, ease: Power1.easeInOut, onStart: onStart, onUpdate: onUpdate, onComplete: onComplete });

// function onStart() {
//     console.log('animation started');
// }

// function onUpdate() {
//     console.log('animation is in progress');

// }

// function onComplete() {
//     console.log('animation is complete');
// }

!(function(e) {
  var n = e("img"),
    o = e("h2"),
    t = e("h1"),
    a = e(".intro"),
    c = e("ul li"),
    i = new TimelineLite();
  i
    .from(t, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
    .from(a, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
    .from(n, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
    .from(o, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
    .from(c, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut }),
    i.pause(),
    e("#btnPlay").on("click", function() {
      i.play();
    }),
    e("#btnPause").on("click", function() {
      i.pause();
    }),
    e("#btnResume").on("click", function() {
      i.resume();
    }),
    e("#btnReverse").on("click", function() {
      i.reverse();
    }),
    e("#btnSpeedUp").on("click", function() {
      i.timeScale(8);
    }),
    e("#btnSlowDown").on("click", function() {
      i.timeScale(0.5);
    }),
    e("#btnSeek").on("click", function() {
      i.seek(1);
    }),
    e("#btnProgress").on("click", function() {
      i.progress(0.5);
    }),
    e("#btnRestart").on("click", function() {
      i.restart();
    });
})(jQuery);
