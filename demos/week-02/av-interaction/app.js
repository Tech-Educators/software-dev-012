// Checking when an img has loaded
const image = document.querySelector("img");
image.addEventListener("load", function () {
  console.log("Image has loaded");
});

// Get infomration about the audio tag
const audio = document.querySelector("audio");

audio.addEventListener("timeupdate", function () {
  console.log(audio.currentTime);
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
