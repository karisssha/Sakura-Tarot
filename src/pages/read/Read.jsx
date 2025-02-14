import "./Read.css" 
import { useEffect, useState } from 'react';
import ButtonSaveReading from "../../components/buttons/save/ButtonSaveReading";
import ButtonSeeHistory from "../../components/buttons/history/ButtonSeeHistory";
import DateDisplay from "../../components/date/DateDisplay";


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
    <DateDisplay/>
      <main className="containerRead">
       <div className="cards">
          {selectedCards.length > 0 ? (
            selectedCards.map((card, index) => (
              <div key={index} className="cardRead">
                <p>{index === 0 ? "PAST" : index === 1 ? "PRESENT" : "FUTURE"}</p>
                <img src={card.sakuraCard} alt={card.englishName} />
                <h2 className={`cardRead.${index === 0 ? 'Past' : index === 1 ? 'Present' : 'Future'}`}>{card.englishName}</h2>
                <h3 className="def">{card.meaning}</h3>
              </div>
            ))
          ) : (
            <p>No cards selected</p>
          )}
        </div>
      <div className="ContainerButtons">
      <ButtonSeeHistory/>
      <ButtonSaveReading/>
      </div>
    </main>
    </>
    )
  }
  
  export default Read
  