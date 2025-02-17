import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './ButtonSaveReading.module.css'
import heartLock from '../../../assets/img/heartLock.png';


function ButtonSaveReading() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const saveReading = async () => {
    try {
      const selectedCards = JSON.parse(localStorage.getItem('selectedCards') || '[]');
      console.log('Selected Cards:', selectedCards);
      
      const newReading = {
        id: Date.now(), 
        date: new Date().toISOString(),
        cards: selectedCards, 
        nickname: localStorage.getItem('nickname')
      };

    
      await axios.post('http://localhost:3000/readings', newReading);

      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate('/favorites');
      }, 2000);
    } catch (error) {
      console.error('Error al guardar la lectura:', error);
      alert('No se pudo guardar la lectura. Intenta nuevamente.');
    }
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
