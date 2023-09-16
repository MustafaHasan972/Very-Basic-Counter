document.addEventListener("DOMContentLoaded", () => {
  const minus = document.getElementById("minus");
  const reset = document.getElementById("reset");
  const plus = document.getElementById("plus");
  const counter = document.querySelector("h2");

  let count = 0;

  plus.addEventListener("click", () => {
    count = count + 1;
    console.log(count);
    counter.textContent = count;
  });

  minus.addEventListener("click", () => {
    if (count > 0) {
      count = count - 1;
      counter.textContent = count;
    }
  });

  reset.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
  });
});
