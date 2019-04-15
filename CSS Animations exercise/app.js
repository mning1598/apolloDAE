var el = document.querySelector(".box");

el.addEventListener("click", clickedBox, false);

function clickedBox(evt) {
  console.log("clicked on box.");
}

var loader = document.getElementById("loader");
var button = document.getElementById("button");
button.addEventListener("click", function() {
  if (loader.className === "loading") {
    loader.className = "";
  } else {
    loader.className = "loading";
  }
});

//loader.className ="";
