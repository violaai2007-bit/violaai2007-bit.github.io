const button = document.querySelector("#cta-button");
const message = document.querySelector("#message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "Tutto collegato: il sito risponde correttamente al click.";
  });
}
