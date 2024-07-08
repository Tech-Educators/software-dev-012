function changeBG(colour) {
  document.body.style.backgroundColor = colour;
}

function trigger(cbf, option) {
  cbf(option);
}

trigger(changeBG, "teal");
// here we are essentially running
// changeBG("teal");
// because the cbf argument we give is the changeBG function
// and the option is passed into the cbf function (which is the colour param of the changeBG)

// annonymous function
trigger(function (greeting) {
  console.log(greeting);
}, "yo");
