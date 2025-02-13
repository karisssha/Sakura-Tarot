import { useState, useEffect } from "react";
import { FetchCards } from '../../services/apiCards'

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await FetchCards();
        setCards(response.data);
      } catch (error) {
        console.error("Error obteniendo las cartas:", error);
      }
    };
    getCards();
  }, []);

  return (
    <>
      {cards.map((card, index) => (
        <div key={card.id}>
          <img src={card.cardsReverse.clowReverse} alt={card.spanishName} />
          {/* Puedes acceder a cualquier propiedad de la carta como:
          card.spanishName
          card.englishName
          card.clowCard
          card.sakuraCard
          card.meaning
          etc. */}
        </div>
      ))}
    </>
  )
}

export default Cards;