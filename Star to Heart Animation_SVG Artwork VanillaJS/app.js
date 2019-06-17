// const _SVG = document.querySelector('svg'),
//     _SHAPE = document.getElementById('shape'),
//     D = 1000 /* viewBox size */,
//     O = {} /* data object */,
//     /* number of cubic curves/ polygon vertices */
//     P = 5,
//     NF = 50 /* total number of frames for transition */,
//     TFN = { /* timing functions */
//         'ease-out': function (k) {
//             return 1 - Math.pow(1 - k, 1.675)
//         },
//         'ease-in-out': function (k) {
//             return .5 * (Math.sin((k - .5) * Math.PI) + 1)
//         },
//         'bounce-ini-fin': function (k, s = -.65 * Math.PI, e = -s) {
//             return (Math.sin(k * (e - s) + s) - Math.sin(s)) / (Math.sin(e) - Math.sin(s))
//         }
//     };

// let dir = -1, rID = null, cf = 0, m;

// function getStarPoints(f = .5) {
//     const RCO = f * D /* outer (pentagram) circumradius*/,
//         BAS = 2 * (2 * Math.PI / P) /* base angle for star poly */,
//         BAC = 2 * Math.PI / P /* base angle for convex poly */,
//         RI = RCO * Math.cos(.5 * BAS) /*pentagram/ inner pentagon inradius */,
//         RCI = RI / Math.cos(.5 * BAC) /* inner pentagon circumradius */,
//         ND = 2 * P /* total number of distinct points we need to get */,
//         BAD = 2 * Math.PI / ND /* base angle for point distribution */,
//         PTS = [] /* array we fill with point coordinates */;

//     for (let i = 0; i < ND; i++) {
//         let /* radius at end point (inner)/ control point (outer) */
//             cr = i % 2 ? RCI : RCO,
//             /* angle of radial segment from origin to current point */
//             ca = i * BAD + .5 * Math.PI,
//             x = Math.round(cr * Math.cos(ca)),
//             y = Math.round(cr * Math.sin(ca));

//         PTS.push([x, y]);
//         /* for even indices double it, control points coincide here */
//         if (!(i % 2)) PTS.push([x, y]);
//     }

//     return PTS
// };

// function getHeartPoints(f = .25) {
//     const R = f * D /* helper circle radius  */,
//         RC = Math.round(R / Math.SQRT2) /* circumradius of square of edge R */,
//         XT = 0, YT = -RC /* coords of point T */,
//         XA = 2 * RC, YA = -RC /* coords of A points (x in abs value) */,
//         XB = 2 * RC, YB = RC /* coords of B points (x in abs value) */,
//         XC = 0, YC = 3 * RC /* coords of point C */,
//         XD = RC, YD = -2 * RC /* coords of D points (x in abs value) */,
//         XE = 3 * RC, YE = 0 /* coords of E points (x in abs value) */,
//         /* const for cubic curve approx of quarter circle */
//         C = .551915,
//         CC = 1 - C,
//         /* coords of ctrl points on TD segs */
//         XTD = Math.round(CC * XT + C * XD), YTD = Math.round(CC * YT + C * YD),
//         /* coords of ctrl points on AD segs */
//         XAD = Math.round(CC * XA + C * XD), YAD = Math.round(CC * YA + C * YD),
//         /* coords of ctrl points on AE segs */
//         XAE = Math.round(CC * XA + C * XE), YAE = Math.round(CC * YA + C * YE),
//         /* coords of ctrl points on BE segs */
//         XBE = Math.round(CC * XB + C * XE), YBE = Math.round(CC * YB + C * YE);

//     return [
//         [XC, YC], [XC, YC], [-XB, YB],
//         [-XBE, YBE], [-XAE, YAE], [-XA, YA],
//         [-XAD, YAD], [-XTD, YTD], [XT, YT],
//         [XTD, YTD], [XAD, YAD], [XA, YA],
//         [XAE, YAE], [XBE, YBE], [XB, YB]
//     ].map(([x, y]) => [x, y - .09 * R]);
// };

// function fnStr(fname, farg) { return `${fname}(${farg})` };

// function range(ini, fin) {
//     return (typeof ini == 'number') ?
//         fin - ini :
//         ini.map((c, i) => range(ini[i], fin[i]))
// };

// function int(ini, rng, tfn, k, cnt) {
//     return (typeof ini == 'number') ?
//         Math.round(ini + cnt * (m + dir * tfn(m + dir * k)) * rng) :
//         ini.map((c, i) => int(ini[i], rng[i], tfn, k, cnt))
// };

// function stopAni() {
//     cancelAnimationFrame(rID);
//     rID = null;
// };

// function update() {
//     cf += dir;

//     let k = cf / NF;

//     for (let p in O) {
//         let c = O[p];

//         _SHAPE.setAttribute(...[
//             p,
//             c.afn(int(c.ini, c.rng, TFN[c.tfn], k, c.cnt ? dir : 1))
//         ]);
//     }

//     if (!(cf % NF)) {
//         stopAni();
//         return
//     }

//     rID = requestAnimationFrame(update)
// };

// (function init() {
//     _SVG.setAttribute('viewBox', [-.5 * D, -.5 * D, D, D].join(' '));

//     O.d = {
//         ini: getStarPoints(),
//         fin: getHeartPoints(),
//         afn: function (pts) {
//             return pts.reduce((a, c, i) => {
//                 return a + (i % 3 ? ' ' : 'C') + c
//             }, `M${pts[pts.length - 1]}`)
//         },
//         tfn: 'ease-in-out'
//     };

//     O.transform = {
//         ini: -180,
//         fin: 0,
//         afn: (ang) => fnStr('rotate', ang),
//         tfn: 'bounce-ini-fin',
//         cnt: 1
//     };

//     O.fill = {
//         ini: [255, 215, 0],
//         fin: [220, 20, 60],
//         afn: (rgb) => fnStr('rgb', rgb),
//         tfn: 'ease-out'
//     };

//     for (let p in O) {
//         O[p].rng = range(O[p].ini, O[p].fin);
//         _SHAPE.setAttribute(p, O[p].afn(O[p].ini));
//     }

//     _SHAPE.addEventListener('click', e => {
//         if (rID) stopAni();
//         dir *= -1;
//         m = .5 * (1 - dir);
//         update();
//     }, false);
// })();


window.onload = function () {

    var followMouse = false, // whether or not to "follow the mouse"
        polygonData = [], // array to hold data objects, one for each point
        lastMousePos = Point(window.innerWidth * .5, window.innerHeight * .5), // where the mouse was last, assume the mouse starts at the center

        canvas = document.getElementById("canvas"), // our <canvas> tag in the index.html DOM
        ctx = canvas.getContext("2d"),
        // query the DOM once for these elements by using pointer variables
        oscillate = document.querySelector('input[name="oscillate"]'),
        fillPolygons = document.querySelector('input[name="fill_polygons"]'),
        oscillationRange = document.querySelector('input[name="osc_range"]'),
        oscillationFrequency = document.querySelector('input[name="osc_freq"]'),
        drawNonPoly = document.querySelector('input[name="draw_non_poly"]'),
        compmode = document.getElementById('compmode'),
        followMouseCheckbox = document.querySelector('input[name="follow_mouse"]');


    checkUrlParams();

    function Point(x, y) { // used to store coordinates
        return {
            x: x,
            y: y
        }
    }

    function Polygon(fill, points, tick) { // data object for polygons
        tick = typeof tick !== 'undefined' ? tick : 0; // a number incremented each step. the Math.sin() of this value will be used to create our oscillation effect https://codepen.io/jpdevries/pen/BjLOeY
        return {
            points: points,
            fill: fill,
            tick: tick,
            step: function () { // each step increment the tick by the current frequency
                this.tick += parseFloat(oscillationFrequency.value);
            }
        }
    }

    document.body.onmousemove = function (e) { // whenever the mouse is moved
        lastMousePos = Point(e.pageX, e.pageY); // store the current mouse position
    };

    function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.onresize = function () {
        handleResize(); // keep the canvas full screen
    };

    handleResize();

    (function () { // for each <polygon> in the source SVG extract points, fill and then remove
        var polygons = document.querySelectorAll('#wolf polygon');

        for (var i = 0; i < polygons.length; i++) {
            var polygon = polygons[i],
                points = polygon.getAttribute('points').trim(),
                fill = polygon.getAttribute('fill');

            polygon.remove(); // remove the shape from the SVG

            polygonData.push(Polygon(fill, points)); // create a Polygon and store it. We'll loop through all these to draw them on each step()
        }
    })();

    var source = createImageOfNonPolygonalShapes(); // create an image of the remaining non-polygonal shapes

    function step(timestamp) { // for each step through the animation
        ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
        ctx.globalCompositeOperation = compmode.value; // update the "blend mode"

        for (var i = 0; i < polygonData.length; i++) { // for each polygon
            var polygon = polygonData[i];

            drawShape(ctx, polygon); // draw the shape onto the <canvas>

            polygon.step();
        }

        if (drawNonPoly.checked) ctx.drawImage(source, (window.innerWidth / 2) - (522 / 2), (window.innerHeight / 2) - (620 / 2)); // draw non-polygonal shapes and center them on <canvas>

        window.requestAnimationFrame(step); // keep the animation running
    }

    window.requestAnimationFrame(step); // start the animation

    function drawShape(ctx, polygon) { // draw the polygon data to a <canvas> context
        var points = polygon.points.split(' '),
            strokeStyle = polygon.fill,
            fillStyle = polygon.fill;

        if (followMouseCheckbox.checked) { // "follow the mouse" if we should
            points[0] = (lastMousePos.x) + ',' + (lastMousePos.y);
        }

        ctx.strokeStyle = strokeStyle;
        ctx.fillStyle = fillStyle;

        ctx.beginPath();

        for (var i = 0; i < points.length; i++) { // for each point in the polygon
            var point = points[i],
                x = parseFloat(point.split(',')[0]),
                y = parseFloat(point.split(',')[1]);

            if (oscillate.checked) { // apply oscillation effect using a sin wave
                if (i == 1) {
                    x += Math.sin(polygon.tick) * oscillationRange.value; // second point in polygon moves horizontally
                } else if (i == 2) {
                    y += Math.sin(polygon.tick) * oscillationRange.value; // third point in polygol moves vertically
                }
            }

            if (i !== 0 || !followMouseCheckbox.checked) { // adjust coordinates for stage size
                x += (window.innerWidth - 522) / 2;
                y += (window.innerHeight - 620) / 2;
            }

            if (i < 1) {
                ctx.moveTo(x, y); // move to the position of the first point
            } else {
                ctx.lineTo(x, y); // draw lines to the rest
            }
        }

        ctx.closePath(); // close the path and set the fill style

        if (fillPolygons.checked) ctx.fill(); // fill the path or
        else ctx.stroke(); // stroke the path
    }

    function createImageOfNonPolygonalShapes() { // takes the remaining <svg> data from our #wolf element and prepare it for being drawn to the canvas
        var source = new Image();
        var DOMURL = window.URL || window.webkitURL || window;

        var data = document.querySelector("#wolf").outerHTML;

        var svgData = new XMLSerializer().serializeToString(document.querySelector("#wolf"));
        var blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });

        var domURL = self.URL || self.webkitURL || self;
        var url = domURL.createObjectURL(blob);

        source.width = '522';
        source.height = '620';

        source.addEventListener('load', function () {
            ctx.drawImage(source, (window.innerWidth / 2) - (522 / 2), (window.innerHeight / 2) - (620 / 2));
            domURL.revokeObjectURL(url);
        });

        source.src = url;

        return source;
    }

    function checkUrlParams() {
        var elements = document.querySelectorAll('[data-url-param]');
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var key = element.getAttribute('data-url-param');
            if ($_GET(key) !== null) {
                if (element.type == "checkbox") {
                    element.checked = ($_GET(key) == "1") ? true : false;
                } else {
                    element.value = $_GET(key);
                }
            }
        }
    }
}

function $_GET(param) { // http://www.creativejuiz.fr/blog/en/javascript-en/read-url-get-parameters-with-javascript
    var vars = {};
    window.location.href.replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}