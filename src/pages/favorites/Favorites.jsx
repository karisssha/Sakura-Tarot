import React, { useState, useEffect } from 'react'
import styles from './Favorites.module.css'
import ButtonRestart from '../../components/buttons/restart/ButtonRestart'
import trashIcon from '../../assets/img/thrasher.png'
import editIcon from '../../assets/img/pencil.png'
import ReadingPopup from '../../components/readingPopup/ReadingPopup'
import catIcon from '../../assets/img/catIcon.png'
import { getReadings, deleteReading, updateReadingNickname } from '../../services/apiReading'

function Favorites() {
    const [readings, setReadings] = useState([])
    const [selectedReading, setSelectedReading] = useState(null)
    const [showPopup, setShowPopup] = useState(false)

    useEffect(() => {
        loadReadings()
    }, [])

    const loadReadings = async () => {
        try {
            const data = await getReadings()
            setReadings(data)
        } catch (error) {
            console.error('Error loading readings:', error)
        }
    }

    const handleDelete = async (readingId) => {
        try {
            await deleteReading(String(readingId))
            setReadings(readings.filter(reading => reading.id !== readingId))
        } catch (error) {
            console.error('Error deleting reading:', error)
        }
    }

    const handleUpdateNickname = async (id, newNickname) => {
        try {
            await updateReadingNickname(id, newNickname)
            newNickname =e.target.newNickname.replace(/[^a-zA-Z]/g, '').slice(0, 12);
            setReadings(readings.map(reading => 
                reading.id === id 
                    ? { ...reading, nickname: newNickname }
                    : reading
            ))
            if (selectedReading && selectedReading.id === id) {
                setSelectedReading(prev => ({
                    ...prev,
                    nickname: newNickname 
                }))
            }
        } catch (error) {
            console.error('Error updating nickname:', error)
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

    const handleReadingClick = (reading) => {
        setSelectedReading(reading);
        setShowPopup(true);
    }

    const clearHistory = async () => {
        if (!window.confirm("Are you sure you want to delete all readings?")) return
        
        try {
            for (const reading of readings) {
                await deleteReading(String(reading.id))
            }
            setReadings([])
            console.log("all the rolls were removed")
        } catch (error) {
            console.error("Error deleting all readings:", error)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Reading List 🔮</h2>
                <div className={styles.actions}>
                    <button onClick={clearHistory} className={styles.deleteHistory}>
                        <img className={styles.catIcon} src={catIcon} alt="Delete History" />
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
                                    <img 
                                        key={index} 
                                        src={card.cardsReverse.sakuraReverse} 
                                        alt={card.spanishName}
                                        onClick={() => handleReadingClick(reading)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                ))}
                            </div>
                            <div className={styles.cardActions}>
                                <button className={styles.editButton}>
                                    <img src={editIcon} alt="Edit" />
                                </button>
                                <button onClick={() => handleDelete(reading.id)} className={styles.deleteButton}>
                                    <img src={trashIcon} alt="Delete" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.emptyMessage}>No saved readings yet.</p>
                )}
            </div>

            {showPopup && selectedReading && (
                <ReadingPopup 
                    reading={selectedReading}
                    onClose={() => setShowPopup(false)}
                    formatDate={formatDate}
                    onUpdateNickname={handleUpdateNickname}
                />
            )}
        </div>
    );
}

export default Favorites;
