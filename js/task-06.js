const inputValidation = document.querySelector("#validation-input");
const textLength = document.querySelector("[data-length]");

inputValidation.addEventListener("blur", (e) => {
  if (e.target.value.length === Number(textLength.dataset.length)) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  } else {
    inputValidation.classList.add("invalid");
    inputValidation.classList.remove("valid");
  }
});
