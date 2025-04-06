const delay = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(ms), ms));
const logger = (time) => console.log(`Resolved after ${time}ms`);

document.querySelectorAll(".delay").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("delay-1")) delay(1000).then(logger);
    if (button.classList.contains("delay-1.5")) delay(1500).then(logger);
    if (button.classList.contains("delay-2")) delay(2000).then(logger);
  });
});
