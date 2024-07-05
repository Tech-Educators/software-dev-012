let count = 0;
const p = document.getElementById("counter");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("reset");

function increaseCount() {
  count = count + 1; // increase our global variable
  p.textContent = count; // update our DOM Node with the new value
}

btn.addEventListener("click", increaseCount);

// reset button
function resetCount() {
  count = 0; // increase our global variable
  p.textContent = count; // update our DOM Node with the new value
}

resetBtn.addEventListener("click", resetCount);
