import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveReading } from '../../../services/apiReading';
import styles from './ButtonSaveReading.module.css'
import heartLock from '../../../assets/img/heartLock.png';

function ButtonSaveReading() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSaveReading = async () => {
    try {
      const selectedCards = JSON.parse(localStorage.getItem('selectedCards') || '[]');
      console.log('Selected Cards:', selectedCards);
      
      const newReading = {
        id: String(Date.now()),
        date: new Date().toISOString(),
        cards: selectedCards, 
        nickname: localStorage.getItem('nickname')
      };

      await saveReading(newReading);

      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate('/favorites');
      }, 2000);
    } catch (error) {
      console.error('Error saving the reading:', error);
      alert('The reading could not be saved. Please try again.');
    }
  };

  return (
    <>
      <button className={styles.SaveButton} onClick={handleSaveReading}>
        <div><img src={heartLock} alt="Save" className={styles.icon}/></div>
        save reading
      </button>
      
      {showAlert && (
        <div className={styles.AlertOverlay}>
          <div className={styles.AlertBox}>
            ¡Reading Saved!
          </div>
        </div>
      )}
    </>
  );
}

export default ButtonSaveReading;
