const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const formObject = Object.fromEntries(formData.entries());

  if (!formObject.email || !formObject.password) {
    alert("Wszystkie pola muszą być wypełnione!");
    return;
  }

  console.log(formObject);
  this.reset();
});
