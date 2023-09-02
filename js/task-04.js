let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterElement = document.querySelector("#value");

function updateCounterValue() {
  counterElement.textContent = counterValue;
}

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

updateCounterValue();
