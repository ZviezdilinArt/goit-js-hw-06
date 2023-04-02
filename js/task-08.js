const form = document.querySelector(".login-form");

form.addEventListener("submit", sendForm);

function sendForm(evt) {
    evt.preventDefault();
    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;

    if (email === "" || password === "") {
        return alert ("всі поля повинні бути заповнені");
    }

    const elements = {
        email,
        password
    };

    console.log(elements);

    form.reset();
}