import React, { useState } from 'react';
import styles from './ButtonSaveReading.module.css'
import heartLock from '../../../assets/img/heartLock.png';

function ButtonSaveReading() {
  const [showAlert, setShowAlert] = useState(false);

  const saveReading = () => {
    const selectedCards = JSON.parse(localStorage.getItem('selectedCards') || '[]');
    
    const reading = {
      date: new Date().toISOString(),
      cards: selectedCards,
      nickname: localStorage.getItem('nickname')
    };

    localStorage.setItem('readings', JSON.stringify(reading));
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <>
      <button className={styles.SaveButton} onClick={saveReading}>
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

export default  ButtonSaveReading;
