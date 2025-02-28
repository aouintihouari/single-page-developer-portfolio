document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const inputs = document.querySelectorAll(".form__name, .fOrm__email");
  function validateInput(input) {
    const container = input.parentElement;
    const errorIcon = container.querySelector(".error-icon");
    const errorMessage = container.querySelector(".error-message");
    let isValid = false;
    if (input.classList.contains("form__name"))
      isValid = /^[a-zA-Z\s]+$/.test(input.value.trim());
    else if (input.classList.contains("fOrm__email"))
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    if (isValid) {
      input.style.borderBottom = "1px solid #4EE1A0";
      errorIcon.style.visibility = "hidden";
      errorMessage.style.visibility = "hidden";
    } else {
      input.style.borderBottom = "1px solid #ff6f5b";
      errorIcon.style.visibility = "visible";
      errorMessage.style.visibility = "visible";
      errorMessage.style.color = "#ff6f5b";
    }
    return isValid;
  }
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      validateInput(this);
    });
  });
  form.addEventListener("submit", function (event) {
    let allValid = true;
    inputs.forEach((input) => {
      if (!validateInput(input)) {
        allValid = false;
      }
    });
    if (!allValid) {
      event.preventDefault();
      console.log("Form submission prevented due to validation errors.");
    }
  });
});
