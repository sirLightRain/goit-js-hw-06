const input = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

input.addEventListener("input", () => {
  const position = input.value + "px";
//   console.log(position);
  text.style.fontSize = position;
});
