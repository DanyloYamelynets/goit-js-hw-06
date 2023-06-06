const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onloginFormSubmit);

function onloginFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    return alert("All inputs should be filled");
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  event.currentTarget.reset();
}
