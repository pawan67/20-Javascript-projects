//declaring ...
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//Play and pause video 3
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
//update play pause icon 4
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = "<i class='bx bx-play'></i>";
  } else {
    play.innerHTML = "<i class='bx bx-pause'></i>";
  }
}
//update progress and timestamp 6
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  //get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  //get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}
//set videop time to progress 6

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
//stop video 7
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
//Event listeners 2

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
