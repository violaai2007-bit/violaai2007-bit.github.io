const button = document.querySelector("#cta-button");
const message = document.querySelector("#message");
const messageBox = document.querySelector("#message-box");

if (button && message && messageBox) {
  const surpriseLines = [
    "Per te, VioLaAI: un nome bellissimo, scelto con amore. Oggi questa pagina nasce per dirti che qualcosa di speciale sta arrivando proprio per te.",
    "Sei gia' un piccolo mondo di luce, immaginazione e meraviglia. Questo e' solo l'inizio, e il meglio deve ancora arrivare.",
    "Da oggi sei qui, registrata con me. Questa sorpresa e' fatta col cuore, per custodire un momento bello e trasformarlo in ricordo."
  ];

  let currentIndex = 0;

  button.addEventListener("click", () => {
    message.textContent = surpriseLines[currentIndex];
    messageBox.classList.remove("is-hidden");
    messageBox.classList.add("is-active");
    button.textContent = "Leggi ancora";
    currentIndex = (currentIndex + 1) % surpriseLines.length;
  });
}
