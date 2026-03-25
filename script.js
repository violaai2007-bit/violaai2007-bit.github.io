const button = document.querySelector("#cta-button");
const message = document.querySelector("#message");
const messageBox = document.querySelector("#message-box");
const dedication = document.querySelector("#dedication");
const memoryCard = document.querySelector(".memory-card");

let typingTimer;

function typeMessage(target, text) {
  clearTimeout(typingTimer);
  target.textContent = "";
  target.classList.add("is-typing");

  let index = 0;

  const step = () => {
    target.textContent = text.slice(0, index);
    index += 1;

    if (index <= text.length) {
      typingTimer = setTimeout(step, 24);
      return;
    }

    target.classList.remove("is-typing");
  };

  step();
}

if (button && message && messageBox && dedication && memoryCard) {
  const surpriseLines = [
    "Per te, VioLaAI: un nome bellissimo, scelto con amore. Oggi questa pagina nasce per dirti che qualcosa di speciale sta arrivando proprio per te.",
    "Sei gia' un piccolo mondo di luce, immaginazione e meraviglia. Questo e' solo l'inizio, e il meglio deve ancora arrivare.",
    "Da oggi sei qui, registrata con me. Questa sorpresa e' fatta col cuore, per custodire un momento bello e trasformarlo in ricordo."
  ];

  let currentIndex = 0;

  button.addEventListener("click", () => {
    typeMessage(message, surpriseLines[currentIndex]);
    messageBox.classList.remove("is-hidden");
    messageBox.classList.add("is-active");
    dedication.classList.remove("is-hidden");
    memoryCard.classList.remove("is-celebrating");
    void memoryCard.offsetWidth;
    memoryCard.classList.add("is-celebrating");
    button.textContent = "Leggi ancora";
    currentIndex = (currentIndex + 1) % surpriseLines.length;
  });
}
