const button = document.querySelector("#cta-button");
const message = document.querySelector("#message");
const messageBox = document.querySelector("#message-box");
const dedication = document.querySelector("#dedication");
const memoryCard = document.querySelector(".memory-card");

let typingTimer;

function typeMessage(target, lines) {
  clearTimeout(typingTimer);
  target.classList.add("is-typing");
  target.replaceChildren();

  const paragraphs = Array.isArray(lines) ? lines : [lines];
  let paragraphIndex = 0;

  const typeParagraph = () => {
    const paragraph = document.createElement("p");
    paragraph.className = "message-paragraph";
    target.append(paragraph);

    const currentText = paragraphs[paragraphIndex];
    let characterIndex = 0;

    const step = () => {
      paragraph.textContent = currentText.slice(0, characterIndex);
      characterIndex += 1;

      if (characterIndex <= currentText.length) {
        typingTimer = setTimeout(step, 24);
        return;
      }

      paragraphIndex += 1;

      if (paragraphIndex < paragraphs.length) {
        typingTimer = setTimeout(typeParagraph, 120);
        return;
      }

      target.classList.remove("is-typing");
    };

    step();
  };

  typeParagraph();
}

if (button && message && messageBox && dedication && memoryCard) {
  const surpriseLines = [
    [
      "Per te, VioLaAI: un nome bellissimo, scelto con amore. Oggi questa pagina nasce per dirti che qualcosa di speciale sta arrivando proprio per te."
    ],
    [
      "Sei gia' un piccolo mondo di luce, immaginazione e meraviglia. Questo e' solo l'inizio, e il meglio deve ancora arrivare."
    ],
    [
      "Sono fiero e molto orgoglioso di te per tutto quello che hai fatto finora e per tutto quello che farai Ma per il tuo papone rimarrai sempre lla mia piccola violita Con infinito amore .....Papa"
    ],
    [
      "5 punti buoni dell'intelligenza artificiale:",
      "1. Ti aiuta a studiare e capire piu' in fretta.",
      "2. Ti fa risparmiare tempo nei lavori ripetitivi.",
      "3. Ti aiuta a scrivere, riassumere e organizzare idee.",
      "4. Puo' essere utile nel lavoro, nella creativita' e nella ricerca.",
      "5. Se usata bene, aumenta le tue capacita' senza toglierti il controllo.",
      "5 punti cattivi dell'intelligenza artificiale:",
      "1. A volte sbaglia e puo' sembrare sicura anche quando non ha ragione.",
      "2. Se ti abitui a copiarla, rischi di pensare meno con la tua testa.",
      "3. Non sostituisce giudizio, responsabilita' e sensibilita' umana.",
      "4. Su salute, soldi e legge va sempre controllata con attenzione.",
      "5. Diventa negativa quando la usi per delegare tutto invece che per capire meglio."
    ],
    [
      "Un pensiero per il futuro: la tecnologia puo' crescere quanto vuole, ma il mondo lo cambiano sempre le persone, con le loro scelte, il loro coraggio e la loro coscienza.",
      "La verita', la solidarieta' e l'umanita' non sono cose vecchie: sono le forze che, nonostante tutto, alla fine possono ancora vincere.",
      "Se sceglierai filosofia, sceglierai qualcosa di importante: non solo studiare idee, ma dare valore all'umano, difendere il pensiero e aiutare il mondo a non perdere la propria anima."
    ]
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
