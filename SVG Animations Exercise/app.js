//Pull Down to Refresh
/*
window.onload = function() {
  var $svg = $(".sidebar"),
    demo = document.getElementsByClassName("demo")[0],
    $path = $(".s-path"),
    $sCont = $(".sidebar-content"),
    $chat = $(".chat"),
    demoTop = demo.top,
    demoLeft = demo.left,
    diffX = 0,
    curX = 0,
    finalX = 0,
    frame = 1000 / 60,
    animTime = 600,
    sContTrans = 200,
    animating = false;

  var easings = {
    smallElastic: function(t, b, c, d) {
      var ts = (t /= d) * t;
      var tc = ts * t;
      return (
        b + c * (33 * tc * ts + -106 * ts * ts + 126 * tc + -67 * ts + 15 * t)
      );
    },
    inCubic: function(t, b, c, d) {
      var tc = (t /= d) * t * t;
      return b + c * tc;
    }
  };

  function createD(top, ax, dir) {
    return "M0,0 " + top + ",0 a" + ax + ",250 0 1," + dir + " 0,500 L0,500";
  }

  var startD = createD(50, 0, 1),
    midD = createD(125, 75, 0),
    finalD = createD(200, 0, 1),
    clickMidD = createD(300, 80, 0),
    clickMidDRev = createD(200, 100, 1),
    clickD = createD(300, 0, 1),
    currentPath = startD;

  function newD(num1, num2) {
    var d = $path.attr("d"),
      num2 = num2 || 250,
      nd = d.replace(/\ba(\d+),(\d+)\b/gi, "a" + num1 + "," + num2);
    return nd;
  }

  function animatePathD(path, d, time, handlers, callback, easingTop, easingX) {
    var steps = Math.floor(time / frame),
      curStep = 0,
      oldArr = currentPath.split(" "),
      newArr = d.split(" "),
      oldLen = oldArr.length,
      newLen = newArr.length,
      oldTop = +oldArr[1].split(",")[0],
      topDiff = +newArr[1].split(",")[0] - oldTop,
      nextTop,
      nextX,
      easingTop = easings[easingTop] || easings.smallElastic,
      easingX = easings[easingX] || easingTop;

    $(document).off("mousedown mouseup");

    function animate() {
      curStep++;
      nextTop = easingTop(curStep, oldTop, topDiff, steps);
      nextX = easingX(curStep, curX, finalX - curX, steps);
      oldArr[1] = nextTop + ",0";
      oldArr[2] = "a" + Math.abs(nextX) + ",250";
      oldArr[4] = nextX >= 0 ? "1,1" : "1,0";
      $path.attr("d", oldArr.join(" "));
      if (curStep > steps) {
        curX = 0;
        diffX = 0;
        $path.attr("d", d);
        currentPath = d;
        if (handlers) handlers1();
        if (callback) callback();
        return;
      }
      requestAnimationFrame(animate);
    }
    animate();
  }

  function handlers1() {
    $(document).on("mousedown touchstart", ".s-path", function(e) {
      var startX = e.pageX || e.originalEvent.touches[0].pageX;

      $(document).on("mousemove touchmove", function(e) {
        var x = e.pageX || e.originalEvent.touches[0].pageX;
        diffX = x - startX;
        if (diffX < 0) diffX = 0;
        if (diffX > 300) diffX = 300;
        curX = Math.floor(diffX / 2);
        $path.attr("d", newD(curX));
      });
    });

    $(document).on("mouseup touchend", function() {
      $(document).off("mousemove touchmove");
      if (animating) return;
      if (!diffX) return;
      if (diffX < 40) {
        animatePathD($path, newD(0), animTime, true);
      } else {
        animatePathD($path, finalD, animTime, false, function() {
          $sCont.addClass("active");
          setTimeout(function() {
            $(document).on("click", closeSidebar);
          }, sContTrans);
        });
      }
    });
  }

  handlers1();

  function closeSidebar(e) {
    if (
      $(e.target).closest(".sidebar-content").length ||
      $(e.target).closest(".chat").length
    )
      return;
    if (animating) return;
    animating = true;
    $sCont.removeClass("active");
    $chat.removeClass("active");
    $(".cloned").addClass("removed");
    finalX = -75;
    setTimeout(function() {
      animatePathD(
        $path,
        midD,
        animTime / 3,
        false,
        function() {
          $chat.hide();
          $(".cloned").remove();
          finalX = 0;
          curX = -75;
          animatePathD($path, startD, (animTime / 3) * 2, true);
          animating = false;
        },
        "inCubic"
      );
    }, sContTrans);
    $(document).off("click", closeSidebar);
  }

  function moveImage(that) {
    var $img = $(that).find(".contact__photo"),
      top = $img.offset().top - demoTop,
      left = $img.offset().left - demoLeft,
      $clone = $img.clone().addClass("cloned");

    $clone.css({ top: top, left: left });
    demo.append($clone);
    $clone.css("top");
    $clone.css({ top: "1.8rem", left: "25rem" });
  }

  function ripple(elem, e) {
    var elTop = elem.offset().top,
      elLeft = elem.offset().left,
      x = e.pageX - elLeft,
      y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({ top: y, left: x });
    elem.append($ripple);
  }

  $(document).on("click", ".contact", function(e) {
    if (animating) return;
    animating = true;
    $(document).off("click", closeSidebar);
    var that = this,
      name = $(this)
        .find(".contact__name")
        .text(),
      online = $(this)
        .find(".contact__status")
        .hasClass("online");
    $(".chat__name").text(name);
    $(".chat__online").removeClass("active");
    if (online) $(".chat__online").addClass("active");
    ripple($(that), e);
    setTimeout(function() {
      $sCont.removeClass("active");
      moveImage(that);
      finalX = -80;
      setTimeout(function() {
        $(".ripple").remove();
        animatePathD(
          $path,
          clickMidD,
          animTime / 3,
          false,
          function() {
            curX = -80;
            finalX = 0;
            animatePathD($path, clickD, (animTime * 2) / 3, true, function() {
              $chat.show();
              $chat.css("top");
              $chat.addClass("active");
              animating = false;
            });
          },
          "inCubic"
        );
      }, sContTrans);
    }, sContTrans);
  });

  $(document).on("click", ".chat__back", function() {
    if (animating) return;
    animating = true;
    $chat.removeClass("active");
    $(".cloned").addClass("removed");
    setTimeout(function() {
      $(".cloned").remove();
      $chat.hide();
      finalX = 100;
      animatePathD(
        $path,
        clickMidDRev,
        animTime / 3,
        false,
        function() {
          curX = 100;
          finalX = 0;
          animatePathD($path, finalD, (animTime * 2) / 3, true, function() {
            $sCont.addClass("active");
            $(document).on("click", closeSidebar);
            animating = false;
          });
        },
        "inCubic"
      );
    }, sContTrans);
  });

  $(window).on("resize", function() {
    demoTop = demo.top;
    demoLeft = demo.left;
  });
};
*/

// Animated Gradient on Text
/*
TweenMax.to(logo, 5, { y: 10, opacity: 0.5, scale: 0.5 });
*/

// Heart Animation
/*
var tl = new TimelineMax({ delay: 6, repeatDelay: -1 });
tl.to(hrt, 0.25, { y: 10, ease: Linear.easeIn })
  .to(hrt, 0.25, {
    y: -6,
    ease: Linear.easeOut
  })
  .to(hrt, 0.25, {
    y: 3.5,
    ease: Linear.easeOut
  });
*/

// Clock
/*
var hands = [];
hands.push(document.querySelector("#secondhand > *"));
hands.push(document.querySelector("#minutehand > *"));
hands.push(document.querySelector("#hourhand > *"));

var cx = 100;
var cy = 100;

function shifter(val) {
  return [val, cx, cy].join(" ");
}

var date = new Date();
var hoursAngle = (360 * date.getHours()) / 12 + date.getMinutes() / 2;
var minuteAngle = (360 * date.getMinutes()) / 60;
var secAngle = (360 * date.getSeconds()) / 60;

hands[0].setAttribute("from", shifter(secAngle));
hands[0].setAttribute("to", shifter(secAngle + 360));
hands[1].setAttribute("from", shifter(minuteAngle));
hands[1].setAttribute("to", shifter(minuteAngle + 360));
hands[2].setAttribute("from", shifter(hoursAngle));
hands[2].setAttribute("to", shifter(hoursAngle + 360));

for (var i = 1; i <= 12; i++) {
  var el = document.createElementNS("http://www.w3.org/2000/svg", "line");
  el.setAttribute("x1", "100");
  el.setAttribute("y1", "30");
  el.setAttribute("x2", "100");
  el.setAttribute("y2", "40");
  el.setAttribute("transform", "rotate(" + (i * 360) / 12 + " 100 100)");
  el.setAttribute("style", "stroke: #ffffff;");
  document.querySelector("svg").appendChild(el);
}
*/

//Rainbow Rocket Man
/*
var jetBubbles = document.getElementsByClassName("jetBubble");
var rocketManSVG = document.querySelector(".rocketManSVG");
var shakeGroup = document.querySelector(".shakeGroup");
var star = document.querySelector(".star");
var satellite = document.querySelector(".satellite");
var astronaut = document.querySelector(".astronaut");
var starContainer = document.querySelector(".starContainer");
var badgeLink = document.querySelector("#badgeLink");

TweenMax.to(astronaut, 0.05, {
  y: "+=4",
  repeat: -1,
  yoyo: true
});
var mainTimeline = new TimelineMax({ repeat: -1 });
var mainSpeedLinesTimeline = new TimelineMax({ repeat: -1, paused: false });

mainTimeline.timeScale(6).seek(100);

function createJets() {
  TweenMax.set(jetBubbles, {
    attr: {
      r: "-=5"
    }
  });
  //jet bubbles
  for (var i = 0; i < jetBubbles.length; i++) {
    var jb = jetBubbles[i];
    var tl = new TimelineMax({ repeat: -1 });
    tl.to(jb, 1, {
      attr: {
        r: "+=15"
      },
      ease: Linear.easeNone
    }).to(jb, 1, {
      attr: {
        r: "-=15"
      },
      ease: Linear.easeNone
    });

    mainTimeline.add(tl, i / 4);
  }
  //speed lines
  for (var i = 0; i < 7; i++) {
    var sl = document.querySelector("#speedLine" + i);

    var stl = new TimelineMax({ repeat: -1, repeatDelay: Math.random() });
    stl
      .set(sl, {
        drawSVG: false
      })
      .to(sl, 0.05, {
        drawSVG: "0% 30%",
        ease: Linear.easeNone
      })
      .to(sl, 0.2, {
        drawSVG: "70% 100%",
        ease: Linear.easeNone
      })
      .to(sl, 0.05, {
        drawSVG: "100% 100%",
        ease: Linear.easeNone
      })
      .set(sl, {
        drawSVG: "-1% -1%"
      });

    mainSpeedLinesTimeline.add(stl, i / 23);
  }
  //stars
  for (var i = 0; i < 7; i++) {
    var sc = star.cloneNode(true);
    starContainer.appendChild(sc);
    var calc = (i + 1) / 2;

    TweenMax.fromTo(
      sc,
      calc,
      {
        x: Math.random() * 600,
        y: -30,
        scale: 3 - calc
      },
      {
        y: Math.random() * 100 + 600,
        repeat: -1,
        repeatDelay: 1,
        ease: Linear.easeNone
      }
    );
  }

  rocketManSVG.removeChild(star);
}

var satTimeline = new TimelineMax({ repeat: -1 });
satTimeline.to(satellite, 46, {
  rotation: 360,
  transformOrigin: "50% 50%",
  ease: Linear.easeNone
});

TweenMax.staggerTo(
  ".pulse",
  0.8,
  {
    alpha: 0,
    repeat: -1,
    ease: Power2.easeInOut,
    yoyo: false
  },
  0.1
);

TweenMax.staggerTo(
  ".satellitePulse",
  0.8,
  {
    alpha: 0,
    repeat: -1,
    ease: Power2.easeInOut,
    yoyo: false
  },
  0.1
);

createJets();

*/
