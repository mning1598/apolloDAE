var day_night_cycle_time = 15;
var animation_delay = day_night_cycle_time / 4;

var tl = new TimelineMax({
  repeat: -1,
  yoyo: true
});
var tlStars = new TimelineMax({
  repeat: -1,
  yoyo: true
});
var snowTop = new TimelineMax({
  repeat: -1,
  repeatDelay: 0
});
var snowBot = new TimelineMax({
  repeat: -1,
  repeatDelay: 0
});

tl.to(
  water,
  2,
  {
    y: 12,
    ease: Linear.easeNone
  },
  0,
  0
)
  .to(
    cloud,
    3,
    {
      x: -12,
      y: 6,
      scale: 0.95,
      rotation: 1,
      ease: Linear.easeNone
    },
    0
  )
  .to(
    sun,
    day_night_cycle_time / 1.25,
    {
      scale: 0.9,
      attr: {
        cx: "753",
        cy: "697"
      },
      ease: Linear.easeNone
    },
    0
  )
  .to(
    "#nighttime-overlay",
    day_night_cycle_time,
    {
      opacity: 1,
      ease: Linear.easeNone
    },
    0,
    0
  )
  .staggerTo(
    "#daytime-gradient stop",
    day_night_cycle_time,
    {
      cycle: {
        stopColor: ["#060414", "#416584"]
      },
      ease: Linear.easeNone
    },
    0,
    0
  )
  .to(
    moon,
    day_night_cycle_time / 2,
    {
      scale: 0.9,
      attr: { cx: 174.5, cy: 202.5 },
      ease: Linear.easeNone
    },
    0,
    0
  )
  .to(
    moon,
    day_night_cycle_time / 2,
    {
      scale: 0.9,
      attr: { cx: 410.5, cy: 114.5 },
      ease: Linear.easeNone
    },
    day_night_cycle_time / 2,
    0
  )
  .to(
    stars,
    day_night_cycle_time / 2,
    { opacity: 1 },
    day_night_cycle_time / 2,
    0
  )
  .from(
    stars,
    day_night_cycle_time - day_night_cycle_time / 4,
    { y: 150, rotation: -15, ease: Linear.easeNone },
    day_night_cycle_time / 4,
    0
  );

tlStars
  .to("#star-one", 0.5, { opacity: 0.5, ease: Linear.easeNone }, 0, 0)
  .to("#star-two", 0.5, { opacity: 0.5, ease: Linear.easeNone }, 1, 0)
  .to("#star-three", 0.5, { opacity: 0.5, ease: Linear.easeNone }, 0.5, 0)
  .to("#star-four", 0.5, { opacity: 0.5, ease: Linear.easeNone }, 1.5, 0);

snowTop.to(
  "#snow-top-layer",
  7,
  { attr: { transform: "translate(24-108)" }, ease: Linear.easeNone },
  0,
  0
);

snowBot.to(
  "#snow-bottom-layer",
  15,
  {
    attr: { transform: "translate(13, 140)" },
    ease: Linear.easeNone
  },
  0,
  0
);
//console.log("animation_water duration: " + tl.duration().toFixed(2));
