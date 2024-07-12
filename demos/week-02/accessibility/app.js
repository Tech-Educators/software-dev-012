const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("Button was clicked");
});

button.addEventListener("focus", function () {
  console.log("Button was focussed");
});
