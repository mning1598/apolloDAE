

$("#circ").velocity({
    opacity: 0.5
}, { duration: 1000, loop: 2 }, "swing", function () {
    console.log("hello")
}).velocity({
    fillBlue: 255
}).velocity({
    rotateZ: 20,
    translateZ: -100
}).velocity("slideout", { duration: 500 }
)