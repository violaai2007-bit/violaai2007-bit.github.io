const button = document.querySelector("#cta-button");
const message = document.querySelector("#message");

if (button && message) {
  const surpriseLines = [
    "Per te, VioLaAI: un nome bellissimo, scelto con amore. Il meglio deve ancora arrivare.",
    "Questa pagina e' solo l'inizio: coming soon, con tutta la luce e la fantasia che meriti.",
    "Da oggi sei qui, registrata con me. Ed e' una sorpresa fatta col cuore."
  ];

  let currentIndex = 0;

  button.addEventListener("click", () => {
    message.textContent = surpriseLines[currentIndex];
    currentIndex = (currentIndex + 1) % surpriseLines.length;
  });
}
