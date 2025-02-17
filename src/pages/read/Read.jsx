import styles from "./Read.module.css" 
import { useEffect, useState } from 'react';
import ButtonSaveReading from "../../components/buttons/save/ButtonSaveReading";
import ButtonSeeHistory from "../../components/buttons/history/ButtonSeeHistory";
import DateDisplay from "../../components/date/DateDisplay";
import NicknameDisplay from "../../components/nickName/NickName";


function Read() {
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('selectedCards'));
    if (storedCards) {
      setSelectedCards(storedCards);
    }
  }, []);
  
    return (
    <>
    
    <NicknameDisplay/>
    
    <DateDisplay/>
      <main className={styles.containerRead}>
       <div className={styles.cards}>
          {selectedCards.length > 0 ? (
            selectedCards.map((card, index) => (
              <div key={index} className={styles.cardRead}>
                <p>{index === 0 ? "PAST" : index === 1 ? "PRESENT" : "FUTURE"}</p>
                <img src={card.sakuraCard} alt={card.englishName} />
                <h2 className={`cardRead.${index === 0 ? 'Past' : index === 1 ? 'Present' : 'Future'}`}>{card.englishName}</h2>
                <h3 className={styles.def}>{card.meaning}</h3>
              </div>
            ))
          ) : (
            <p>No cards selected</p>
          )}
        </div>
      <div className={styles.ContainerButtons}>
      <ButtonSeeHistory/>
      <ButtonSaveReading/>
      </div>
    </main>
    </>
    )
  }
  
  export default Read