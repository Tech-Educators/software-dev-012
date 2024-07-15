const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(form);
  const formValues = Object.fromEntries(data);
  console.log(formValues);

  document.body.style.backgroundColor = formValues.colour;
});
