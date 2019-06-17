var tlB = new TimelineMax({ repeat: -1, onUpdate: updateSlider }),
  tlO = new TimelineMax({ repeat: -1, onUpdate: updateSliderO }),
  tlchapeu = new TimelineMax(),
  oculos = [
    ".mustache1 .oculos",
    ".mustache2 .oculos",
    ".mustache3 .oculos",
    ".mustache4 .oculos",
    ".mustache5 .oculos",
    ".mustache6 .oculos"
  ],
  bigodes = [
    ".mustache1 .bigode",
    ".mustache2 .bigode",
    ".mustache3 .bigode",
    ".mustache4 .bigode",
    ".mustache5 .bigode",
    ".mustache6 .bigode"
  ],
  $slider = $("#slider"),
  $sliderOculos = $("#sliderOculos");

tlO.timeScale(1.5);
tlB.timeScale(1.5);

tlchapeu
  .set(".chapeu", { visibility: "visible" })
  .fromTo(
    ".chapeu",
    1,
    { drawSVG: 0, ease: Linear.easeNone },
    { drawSVG: "102%" },
    0.1
  )
  .fromTo(
    ".chapeu",
    1,
    { fill: "#FFF3D3", stroke: "#1E1817" },
    { fill: "#1E1817", stroke: "none" },
    "-=0.2"
  );

for (var i = 0, n = oculos.length; i < n; i++) {
  tlO
    .set(oculos[i], { x: 100, visibility: "visible" }, "-=0.1")
    .to(oculos[i], 1, { x: 0, opacity: 1 })
    .fromTo(
      oculos[i],
      2,
      { drawSVG: 0, ease: Linear.easeNone },
      { drawSVG: "102%", ease: Sine.easeIn },
      "-=1"
    )
    .fromTo(
      oculos[i],
      1,
      { fill: "#FFF3D3", stroke: "#1E1817" },
      { fill: "#1E1817", stroke: "none" },
      "-=0.1"
    )
    .to(oculos[i], 0.5, { x: -100, opacity: 0, delay: 0.5 });
}

for (var i = 0, n = bigodes.length; i < n; i++) {
  tlB
    .set(bigodes[i], { x: -100, visibility: "visible" }, "-=0.1")
    .to(bigodes[i], 1, { x: 0, opacity: 1 })
    .fromTo(
      bigodes[i],
      2,
      { drawSVG: 0, ease: Linear.easeNone },
      { drawSVG: "102%", ease: Sine.easeIn },
      "-=1"
    )
    .fromTo(
      bigodes[i],
      1,
      { fill: "#FFF3D3", stroke: "#1E1817" },
      { fill: "#1E1817", stroke: "none" },
      "-=0.1"
    )
    .to(bigodes[i], 0.5, { x: 100, opacity: 0, delay: 0.5 });
}

//--- CONTROLS ---
$slider.slider({
  range: false,
  min: 0,
  max: 100,
  step: 0.02,
  value: 0,
  slide: function(event, ui) {
    tlB.progress(ui.value / 100).pause();
  }
});
function updateSlider() {
  $slider.slider("value", tlB.progress() * 100);
}
$sliderOculos.slider({
  range: false,
  min: 0,
  max: 100,
  step: 0.02,
  value: 0,
  slide: function(event, ui) {
    tlO.progress(ui.value / 100).pause();
  }
});
function updateSliderO() {
  $sliderOculos.slider("value", tlO.progress() * 100);
}
var $replayIcon = $("#icon"),
  $replay = $("#replay")
    .mouseenter(function() {
      TweenLite.to($replayIcon, 0.4, {
        rotation: "+=360",
        transformOrigin: "50% 50%"
      });
    })
    .click(function() {
      tlB.restart();
      tlO.restart();
      tlchapeu.restart();
    });
