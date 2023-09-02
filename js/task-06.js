const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const requiredLength = parseInt(validationInput.getAttribute("data-length"));
  const inputValueLength = validationInput.value.length;
  const isValid = inputValueLength === requiredLength;

  validationInput.classList.remove("valid", "invalid");
  validationInput.classList.add(isValid ? "valid" : "invalid");
});
