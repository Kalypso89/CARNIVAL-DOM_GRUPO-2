var counter = 11;

function play() {
  document.getElementById("play-btn").style.opacity = "0%";
  document.getElementById("time").style.opacity = "100%";
  counter--, (document.getElementById("time").innerHTML = counter);
}

var interval;

document.getElementById("play-btn").addEventListener("click", function () {
  interval = setInterval(play, 1000);
});
