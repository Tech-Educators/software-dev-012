const formOne = document.getElementById("formOne");
const formTwo = document.getElementById("formTwo");

// version that uses the event to get the form information
formOne.addEventListener("submit", function (event) {
  event.preventDefault(); // the default action is to refresh the page, we don't want that
  const username = event.target.username.value;
  const password = event.target.password.value;
  // here we would make adatabase call or something with our form information
  console.log(username, password);
});

// version that uses formData
formTwo.addEventListener("submit", function (event) {
  event.preventDefault();

  // new FormData is built into JavaScript
  // it expects top be be given a form DOM Node as a parameter
  const data = new FormData(formTwo);
  const formValues = Object.fromEntries(data);
  // here we would make adatabase call or something with our form information
  console.log(formValues);
});
