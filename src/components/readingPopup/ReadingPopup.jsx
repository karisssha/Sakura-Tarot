import React from 'react';
import styles from './ReadingPopup.module.css';

function ReadingPopup({ reading, onClose, formatDate }) {
    if (!reading) return null;

    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <button 
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    ×
                </button>
                <h3>Reading Details</h3>
                <p><strong>Date:</strong> {formatDate(reading.date)}</p>
                <p><strong>User:</strong> {reading.nickname}</p>
                <div className={styles.cardsDetails}>
                    {reading.cards.map((card, index) => (
                        <div key={index} className={styles.cardDetail}>
                            <img 
                                src={card.sakuraCard} 
                                alt={card.englishName}
                            />
                            <h4>{card.englishName}</h4>
                            <p>{card.meaning}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReadingPopup;
