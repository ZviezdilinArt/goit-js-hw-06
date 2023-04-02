const ourInput = document.querySelector("#name-input");
let ourName = document.querySelector("#name-output");


ourInput.addEventListener("input", changeName);

function changeName(event) {

    const text = event.currentTarget.value.trim();

    if (text) {
        ourName.textContent = text; 
    } else {
         ourName.textContent = "Anonymous";
    }
}