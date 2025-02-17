import { useState, useEffect } from 'react';
import styles from './Favorites.module.css';

function Favorites() {
    const [readings, setReadings] = useState([]);


    useEffect(() => {
        const storedReadings = JSON.parse(localStorage.getItem('readings')) || [];
        setReadings(storedReadings);
    }, []);

    const removeReading = (id) => {
        const updatedReadings = readings.filter(reading => reading.id !== id);
        setReadings(updatedReadings);
        localStorage.setItem('readings', JSON.stringify(updatedReadings));
    };

    const clearHistory = () => {
      setReadings([]);
      localStorage.removeItem('readings');
  };

    return (
      <div className={styles.container}>
      <div className={styles.header}>
          <h2>Reading List 🔮</h2>
          <div className={styles.actions}>
              <button onClick={clearHistory} className={styles.deleteHistory}>🗑 Delete History</button>
              <button className={styles.restart}>🌀 Restart</button>
          </div>
      </div>

      <div className={styles.readingGrid}>
          {readings.length > 0 ? (
              readings.map((reading) => (
                  <div key={reading.id} className={styles.readingCard}>
                      <p><strong>Day:</strong> {reading.date}</p>
                      {reading.nickname && <p><strong>Name:</strong> {reading.nickname}</p>}
                      
                      <div className={styles.cardsContainer}>
                          {reading.cards.map((card, index) => (
                              <img key={index} src={card.cardsReverse.sakuraReverse} alt={card.spanishName} />
                          ))}
                      </div>

                      <div className={styles.cardActions}>
                          <button className={styles.editButton}>✏️</button>
                          <button onClick={() => removeReading(reading.id)} className={styles.deleteButton}>🗑</button>
                      </div>
                  </div>
              ))
          ) : (
              <p className={styles.emptyMessage}>No saved readings yet.</p>
          )}
      </div>
  </div>
);
}


export default Favorites;