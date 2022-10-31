const passwordElement = document.getElementById("password");
const confirmPasswordElement = document.getElementById("confirm-password");
const span = document.querySelector(".password-match");

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", () => {
  const isMatchingPasswords =
    passwordElement.value === confirmPasswordElement.value;

  if (!isMatchingPasswords) {
    addErrorStyles();
  } else {
    removeErrorStyles();
  }
});

function removeErrorStyles() {
  passwordElement.classList.remove("error");
  confirmPasswordElement.classList.remove("error");

  passwordElement.style.border = "2px solid #e5e7eb";
  confirmPasswordElement.style.border = "2px solid #e5e7eb";

  span.textContent = "";
  span.style.color = "black";
}

function addErrorStyles() {
  passwordElement.classList.add("error");
  confirmPasswordElement.classList.add("error");

  passwordElement.style.border = "2px solid red";
  confirmPasswordElement.style.border = "2px solid red";

  span.textContent = "* Passwords do not match";
  span.style.color = "red";
}
