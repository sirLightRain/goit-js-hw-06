
const counterValue = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementtBtn = document.querySelector('button[data-action="increment"]');

let count = 0;

decrementBtn.addEventListener("click", () => {
  count -= 1;
  counterValue.textContent = count;
});

incrementtBtn.addEventListener("click", () => {
    count += 1;
    counterValue.textContent = count;
});
