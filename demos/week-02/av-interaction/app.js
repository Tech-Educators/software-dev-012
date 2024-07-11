// Checking when an img has loaded
const image = document.querySelector("img");
image.addEventListener("load", function () {
  console.log("Image has loaded");
});

// Get infomration about the audio tag
const audio = document.querySelector("audio");
const timeElement = document.getElementById("timeElapsed");

audio.addEventListener("timeupdate", function () {
  console.log(audio.currentTime);
  // show time on the page
  timeElement.textContent = formatTime(audio.currentTime);
  // SUDO CODE
  // updating a slider to show time elapsed
  // assuming the audio is 100 seconds long
  // i want to put the slider 1 point each second
  // BUT its not always going to be 100 seconds, so I need to do maths to get the correct step for each second
});

// Making our own controls
// play button
const playBtn = document.getElementById("play");
playBtn.addEventListener("click", function () {
  audio.play();
});

// pause button
const pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click", function () {
  audio.pause();
});

// stop button
const stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", function () {
  audio.pause();
  audio.currentTime = 0;
});

// volume control
const volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener("change", function (event) {
  audio.volume = event.target.value; // event.target.value is the value of the slider we just changed
});

// increase time by 15 second (skip forward)
// decrease time by 15 second (skip backwards)
// if we had an array of mp3 names, we could change the src of our audio to be the next item in the array
// there is also an "ended" event we could use to automatically play a new song

// format time
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
