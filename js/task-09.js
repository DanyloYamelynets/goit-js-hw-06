const myColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", onChangeColor);

function onChangeColor() {
  const bodyStyle = (body.style.backgroundColor = getRandomHexColor());
  myColor.textContent = bodyStyle;
}

function getRandomHexColor() {
  console.log(document.body);
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
