window.onload = function () {
    var s = Snap("#svg");
    var circle = s.circle(60, 60, 50);

    circle.attr({
        fill: "#f00",
        stroke: "#000",
        strokeWidth: 2
    })

    var loop = function (count = 0, count1 = 0) {
        var varX = 60;
        var varY = 60;


        if (count == 0) {
            varX = 100;
        }
        else if (count == 2) {
            varX = 60;
        }
        else if (count == 4) {
            count = 0;
        }
        if (count1 == 2) {
            varY = 100;
        }
        else if (count1 == 4) {
            varY = 60
        }
        else if (count1 == 6) {
            count1 = 0;
        }
        circle.animate({ cx: varX, cy: varY }, 1500, function () {
            count++;
            count1++;
            loop(count, count1)
        })
    }
    // circle.drag()
    loop(0, 1);
}

// function move() {
//     circle.animate({})
// }