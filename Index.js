const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const rotateCard = ({ x, y }) => {
    const cardRect = card.getBoundingClientRect();
    const posX = x - cardRect.x;;
    const posY = y - cardRect.y;
    const ratioX = posX / cardRect.width;
    const ratioY = posY / cardRect.height;
    card.style.setProperty('--ratio-x', ratioX);
    card.style.setProperty('--ratio-y', ratioY);
    };

    document.body.addEventListener('pointermove', rotateCard);
  });