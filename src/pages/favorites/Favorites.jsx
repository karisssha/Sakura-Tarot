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
      .then(response => { console.log("Data received from API:", response.data);setReadings(response.data) }) 
      .catch(error => console.error("Error retrieving rolls:", error)); }, [])

      const clearHistory = async () => {
        if (!window.confirm("Are you sure you want to delete all readings?")) return
      
        try {
        
          for (const reading of readings) {
            await fetch(`${API_URL}/${reading.id}`, { method: 'DELETE' })
            console.log(`Shot with id: ${reading.id} eliminated`)
          }
      
          setReadings([]);
          console.log("all the rolls were removed")
        } catch (error) {
          console.error("Error deleting all readings:", error)
        }
      }

      const removeReading = async (id) => {
        console.log(`Attempting to erase the run with id:${id}`)
      
        try {
          
          const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      
          if (!response.ok) {
            throw new Error(`Error when deleting: ${response.statusText}`)
          }
      
          console.log(`Shot with id: ${id} removed from API`)
          setReadings(prevReadings => prevReadings.filter(reading => reading.id !== id))
      
        } catch (error) {
          console.error("Error deleting roll:", error)
        }
      }
      const formatDate = (dateString) => {
        if (!dateString) return "Unknown Date"
        
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
              <img className={styles.catIcon} src="/src/assets/img/catIcon.png" alt="Delete History" />
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
                      <p><strong>Day:</strong> {formatDate(reading.date)}</p>
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
