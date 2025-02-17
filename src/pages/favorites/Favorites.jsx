import { useState, useEffect } from 'react'
import styles from './Favorites.module.css'
import ButtonRestart from '../../components/buttons/restart/ButtonRestart'
import trashIcon from '../../assets/img/thrasher.png'
import editIcon from '../../assets/img/pencil.png'
import catIcon from'../../assets/img/catIcon.png'
import axios from 'axios'

const API_URL = 'http://localhost:3000/readings'

function Favorites() {
    const [readings, setReadings] = useState([])


    useEffect(() => { axios.get(API_URL) 
      .then(response => { console.log("Datos recibidos desde API:", response.data);setReadings(response.data); }) 
      .catch(error => console.error("Error al obtener las tiradas:", error)); }, []);

    const clearHistory = () => {
      if (!window.confirm("Are you sure you want to delete all readings?")) return
      
      readings.forEach((reading) => {
      axios.delete(`${API_URL}/${reading.id}`)
      .catch(error => console.error("Error deleting roll:", error))
      });
  
      setReadings([])
    }

  const formatDate = (dateString) => {
    if (!dateString) return "Unknow Date"

    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }
     return (
      <div className={styles.container}>
      <div className={styles.header}>
          <h2>Reading List 🔮</h2>
          <div className={styles.actions}>
              <button onClick={clearHistory} className={styles.deleteHistory}>
              <img src={catIcon} alt="Delete History" />
              Delete history
              </button>
              <ButtonRestart />
          </div>
      </div>

      <div className={styles.readingGrid}>
          {readings.length > 0 ? (
              readings.map((reading) => (
                  <div key={reading.id} className={styles.readingCard}>
                    <div className={styles.infoContainer}>
                      <p><strong>Day:</strong> {reading.date}</p>
                      <p><strong>Name:</strong> {reading.nickname}</p>
                    </div>
                    <div className={styles.cardsContainer}>
                      {reading.cards.map((card, index) => (
                        <img key={index} src={card.cardsReverse.sakuraReverse} alt={card.spanishName} />
                      ))}
                    </div>
                      <div className={styles.cardActions}>
                          <button className={styles.editButton}>
                            <img src={editIcon} alt="Edit" />
                          </button>
                          <button onClick={() => removeReading(reading.id)} className={styles.deleteButton}>
                            <img src={trashIcon} alt="Delete" />
                          </button>
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
