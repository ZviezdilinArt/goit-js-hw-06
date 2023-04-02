function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ourBtn = document.querySelector(".change-color");
const colorNow = document.querySelector(".color");
const ourBody = document.body;

ourBtn.addEventListener("click", changeColor);

function changeColor(evt) {
  const changeColor = getRandomHexColor();  

  ourBody.style.backgroundColor = changeColor;
  colorNow.textContent = changeColor;
}
