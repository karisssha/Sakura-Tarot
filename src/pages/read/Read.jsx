import "./Read.css" 
import { useEffect, useState } from 'react';
//import {Cards} from "../src/components/randomCards/RandomCards.jxs";

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
    <main className="containerRead">
    <section >
    <div>Input Name</div>
    <div>Date</div>
    </section>

    <div className="cards">
          {selectedCards.length > 0 ? (
            selectedCards.map((card, index) => (
              <div key={index} className="cardRead">
                <p>{index === 0 ? "PAST" : index === 1 ? "PRESENT" : "FUTURE"}</p>
                <img src={card.imageUrl} alt={card.name} />
                <h2 className={`cardRead.${index === 0 ? 'Past' : index === 1 ? 'Present' : 'Future'}`}>{card.name}</h2>
                <h3 className="def">{card.meaning}</h3>
              </div>
            ))
          ) : (
            <p>No cards selected</p>
          )}
        </div>
        


   
    <section>
      <button>see history</button>
      <button><img src=""></img>save reading</button>
    </section>















    </main>
    </>
    )
  }
  
  export default Read
  