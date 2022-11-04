const video = document.querySelector("video");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const playbtn = document.getElementById("play-btn");
const volumeIcon = document.getElementById("volume-icon");
const volumeRange = document.querySelector(".volume-range");
const volumeBar = document.querySelector(".volume-bar");
const currentTime = document.querySelector(".time-elapsed");
const duration = document.querySelector(".time-duration");
const fullscreenBtn = document.querySelector(".fullscreen");

// Show play icon
function showplayicon() {
  playbtn.classList.replace("fa-pause", "fa-play");
  playbtn.setAttribute("title", "play");
}

// Play & Pause ----------------------------------- //

function togglePlay() {
  if (video.paused) {
    video.play();
    playbtn.classList.replace("fa-play", "fa-pause");
    playbtn.setAttribute("title", "pause");
  } else {
    video.pause();
    showplayicon();
  }
}

// On Video end, Show play icon
video.addEventListener("ended", showplayicon);

// Progress Bar ---------------------------------- //

// calculate display time format
function displayTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}

// UpdateProgess bar as video plays
function updateProgress() {
  progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
  currentTime.textContent = displayTime(video.currentTime);
  duration.textContent = displayTime(video.duration);
}

// Volume Controls --------------------------- //

// Change Playback Speed -------------------- //

// Fullscreen ------------------------------- //

// Event Listeners
video.addEventListener("click", togglePlay);
playbtn.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgress);
video.addEventListener("canplay", updateProgress);
