const says = document.querySelector("#says");
console.log(says);
says.onclick = function(e) {
  e.preventDefault();
  var text = document.getElementById("inputTxt").value;
  console.log(text);
  text = encodeURIComponent(text);
  console.log(text);
  var url =
    "https://translate.google.com/translate_tts?ie=UTF-8&q=" + text + "&tl=en";
  var speech = document.getElementById("speech");
  speech.src = url;
  console.log(speech);
  speech.play();
};
