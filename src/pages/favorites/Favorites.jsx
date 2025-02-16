import { useState, useEffect } from 'react';
import styles from '../favorites/Favorites'


function Favorites() {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    const savedReadings = JSON.parse(localStorage.getItem('readings') || '[]');
    setReadings(savedReadings);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className={styles.container}>
      <h2>Reading History</h2>
      {readings.length > 0 ? (
        <div className={styles.readingsGrid}>
          {readings.map((reading) => (
            <div key={reading.id} className={styles.readingCard}>
              <p className={styles.date}>{formatDate(reading.date)}</p>
              <p className={styles.nickname}>By: {reading.nickname}</p>
              <div className={styles.cardsContainer}>
                {reading.cards.map((card, index) => (
                  <div key={index} className={styles.card}>
                    <img src={card.sakuraCard} alt={card.englishName} />
                    <p>{index === 0 ? "Past" : index === 1 ? "Present" : "Future"}</p>
                    <p>{card.englishName}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No readings saved yet.</p>
      )}
    </div>
  );
}

export default Favorites; 