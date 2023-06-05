let Value = 0;
const counterValue = document.querySelector("#value");
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');

const decrementClick = () => {
  Value -= 1;
  counterValue.textContent = Value;
};
const incrementClick = () => {
  Value += 1;
  counterValue.textContent = Value;
};

btnDec.addEventListener("click", decrementClick);
btnInc.addEventListener("click", incrementClick);
