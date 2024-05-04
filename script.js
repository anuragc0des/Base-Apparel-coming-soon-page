function validateEmail(email) {
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  return emailRegex.test(email);
}

function handleSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById("emailInput");
  const errorMsg = document.querySelector(".error-msg");
  const errorIcon = document.querySelector(".error-icon");

  if (validateEmail(emailInput.value)) {
    alert("Email is valid");
  } else {
    errorMsg.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
  }
}

const emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", handleSubmit);
