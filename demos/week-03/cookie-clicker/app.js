// DOM Nodes
const cookieCount = document.getElementById("cookie-count");
const cpsDisplay = document.getElementById("cps-display");
const cookieBtn = document.getElementById("cookieBtn");

// STATE (global variables)
let cookies = 0;
let cps = 1;

// function to increase the cookie by the CPS
function increaseCookies() {
  cookies += cps;
  cookieCount.textContent = cookies;
}

setInterval(increaseCookies, 1000);

// increase cookies by one every click
function clickCookie() {
  cookies++;
  cookieCount.textContent = cookies;
}

cookieBtn.addEventListener("click", clickCookie);

// TODO Store the number of cookies and cps in local storage
// TODO Make the page look SWEEEEET
// TODO Have fun!
// TODO STRETCH GOAL upgrades (buttons) that increase CPS and take away cookies
// TODO STRETCH GOAL upgrades (buttons) that increase number of cookies I get per click
