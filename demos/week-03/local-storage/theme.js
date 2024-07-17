// global variable to keep track of our theme
let theme = localStorage.getItem("theme") || "dark"; // if LS theme is null, use "dark" instead
const btn = document.querySelector("button");

function setTheme() {
  // remove all classes
  document.body.classList.remove("dark");
  document.body.classList.remove("light");
  // add the relevant one
  document.body.classList.add(theme);
}

function changeTheme() {
  if (theme === "dark") {
    theme = "light";
    localStorage.setItem("theme", "light");
  } else {
    theme = "dark";
    localStorage.setItem("theme", "dark");
  }
  setTheme();
}
btn.addEventListener("click", changeTheme);

setTheme(); // always run once when the page loads
