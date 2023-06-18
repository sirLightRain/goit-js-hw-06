const input = document.querySelector("#validation-input");
console.log(input.dataset.length, typeof input.dataset.length);
console.log(parseInt(input.dataset.length), typeof parseInt(input.dataset.length));

input.addEventListener("blur", () => {
  const requiredLength = parseInt(input.dataset.length);

  const currentLength = input.value.length;

  if (currentLength === requiredLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
