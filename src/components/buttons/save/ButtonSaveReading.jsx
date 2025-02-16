import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ButtonSaveReading.module.css'
import heartLock from '../../../assets/img/heartLock.png';

function ButtonSaveReading() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const saveReading = () => {
    const selectedCards = JSON.parse(localStorage.getItem('selectedCards') || '[]');
    

    const newReading = {
      id: Date.now(), 
      date: new Date().toISOString(),
      cards: selectedCards, 
      nickname: localStorage.getItem('nickname')
    };

    const existingReadings = JSON.parse(localStorage.getItem('readings') || '[]');
    

    const updatedReadings = [...existingReadings, newReading];
    

    localStorage.setItem('readings', JSON.stringify(updatedReadings));
    
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigate('/favorites');
    }, 2000);
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

export default ButtonSaveReading;
