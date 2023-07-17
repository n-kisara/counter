const inputText = document.getElementById("input_text");
function keyUp() {
  let str = inputText.value;
  const count = document.getElementById("count");
  let num = 10 - str.length;
  count.textContent = num;
  if (num >= 0) {
    count.style.color = "black";
  } else {
    count.style.color = "red";
  }
}

inputText.addEventListener("keyup", keyUp, false);
