const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const registerBtn = document.getElementById("registerBtn");
const msg = document.getElementById("msg");

registerBtn.addEventListener("click", function () {

    const name = nameInput.value;
    const email = emailInput.value;
    const age = ageInput.value;

    // validation
    if (name === "" || email === "" || age === "") {
        msg.style.color = "red";
        msg.innerText = "All fields are required!";
        return;
    }

    if (age < 1) {
        msg.style.color = "red";
        msg.innerText = "Age must be valid";
        return;
    }

    // success
    msg.style.color = "green";
    msg.innerText = "Registration Successful 🎉";

    // clear inputs
    nameInput.value = "";
    emailInput.value = "";
    ageInput.value = "";
});