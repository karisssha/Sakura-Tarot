import React, { useState, useEffect } from 'react';
import styles from './ReadingPopup.module.css';
import editIcon from '../../assets/img/pencil.png';

function ReadingPopup({ reading, onClose, formatDate, onUpdateNickname }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newNickname, setNewNickname] = useState(reading?.nickname || '');

    useEffect(() => {
        setNewNickname(reading?.nickname || '');
    }, [reading]);

    if (!reading) return null;

    const handleSubmit = async () => {
        try {
            if (newNickname.trim() !== reading.nickname) {
                await onUpdateNickname(reading.id, newNickname.trim());
            }
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating nickname:', error);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const value = e.target.value.replace(/[^a-zA-Z]/g, '').slice(0, 12);
            handleSubmit();
            setNickname(value);
        }
    }

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
                <div className={styles.nicknameContainer}>
                    <strong>User:</strong>
                    {isEditing ? (
                        <div className={styles.editContainer}>
                            <input
                                type="text"
                                value={newNickname}
                                onChange={(e) => setNewNickname(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className={styles.nicknameInput}
                                autoFocus
                            />
                            <button onClick={handleSubmit} className={styles.saveButton}>
                                Save
                            </button>
                        </div>
                    ) : (
                        <div className={styles.displayContainer}>
                            <span>{reading.nickname}</span>
                            <button onClick={() => setIsEditing(true)} className={styles.editButton}>
                                <img src={editIcon} alt="Edit" />
                            </button>
                        </div>
                    )}
                </div>
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
