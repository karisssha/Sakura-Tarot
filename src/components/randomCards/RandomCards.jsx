import { useState, useEffect } from "react";
import { FetchCards } from "../../services/apiCards";
import { useNavigate } from 'react-router-dom';
import styles from "./RandomCards.module.css";

function Cards() {
  const [cards, setCards] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await FetchCards();
        setCards(response.data.sort(() => Math.random() - 0.5));
      } catch (error) {
        console.error("Error obteniendo las cartas:", error);
      }
    };
    getCards();
  }, []);

  const handleCardClick = (card) => {
    console.log(card)
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount === 3) {
      const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
      const selectedCards = shuffledCards.slice(0, 3);
      
      localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
  
      setTimeout(() => {
        navigate('/read');
      }, 1000);
    }
  };

  const middleIndex = Math.ceil(cards.length / 2);
  const firstHalf = cards.slice(0, middleIndex);
  const secondHalf = cards.slice(middleIndex);

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.stackContainer}>
        {firstHalf.map((card, index) => (
          <div 
            key={card.id} 
            className={styles.card}
            style={{ transform: `translateX(${index * 40}px)` }}
            onClick={()=> handleCardClick(card)}
          >
            <img src={card.cardsReverse.sakuraReverse} alt={card.spanishName} />
          </div>
        ))}
      </div>

      <div className={styles.stackContainer}>
        {secondHalf.map((card, index) => (
          <div 
            key={card.id} 
            className={styles.card}
            style={{ transform: `translateX(${index * 41.5}px)` }}
            onClick={()=> handleCardClick(card)}
          >
            <img src={card.cardsReverse.sakuraReverse} alt={card.spanishName} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
