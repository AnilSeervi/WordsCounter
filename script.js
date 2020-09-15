const inputText = document.querySelector("#textInput");
const output = document.querySelector(".output");

function countWords(string) {
  return string.trim().split(/\s+/).length;
}

inputText.addEventListener("keyup", () => {
  let str = inputText.value;
  if (str === "") {
    output.textContent = "0";
  } else {
    output.textContent = countWords(str);
  }
});

inputText.addEventListener("paste", () => {
  let str = inputText.value;
  if (str === "") {
    output.textContent = "0";
  } else {
    output.textContent = countWords(str);
  }
});
