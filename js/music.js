var music = document.getElementById("music");
var isPlaying;
var playbtn = $(".pause-play");
music.volume = 0.2;
function togglePlay() {
  if (isPlaying) {
    music.pause()
  } else {
    music.play();
  }
};
music.onplaying = function() {
  isPlaying = true;
  document.getElementById("music-animation").classList.add('on');
    $(".music-wave").show();
    $(".s4 hr").hide();
};
music.onpause = function() {
  isPlaying = false;
  document.getElementById("music-animation").classList.remove('on');
    $(".music-wave").hide();
    $(".s4 hr").show();
};

var button = document.getElementById("toggle");
button.addEventListener('click', function() {
    playbtn.toggleClass("paused");  
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");  
  }
}, false);
