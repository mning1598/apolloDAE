if (SVG.supported) {
    var draw = SVG('drawing').size(300, 300);
    var circle = draw.circle(100).fill('#f06');
    var done = false;
    circle.animate().move(0, 100).during(function () {
        if (done) {
            circle.animate().move(0, 100);
        }
        done = true;
        circle.animate().move(100, 100);
        circle.animate().move(100, 0);
        circle.animate().move(0, 0);
    });
    /* 		circle.animate().move(100,100);
                circle.animate().move(100, 0);
                circle.animate().move(0, 0); */


} else {
    alert('SVG not supported')
}