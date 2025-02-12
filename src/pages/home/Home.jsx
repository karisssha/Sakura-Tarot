import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '/src/pages/home/home.module.css';

function Home() {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('nickname');
    if (storedName) {
      setNickname(storedName);
    }
  }, []);

  const handleStart = () => {
    localStorage.setItem('nickname', nickname);
    navigate('/pages/Cards');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const validValue = value.replace(/[^a-zA-Z]/g, '').slice(0, 12);
    setNickname(validValue);
  };

  return ( 
    <div className={styles.MainContainer}>
      <h1 className={styles.Welcome}>Welcome to Sakura Tarot</h1>
      <div className={styles.ContentWrapper}>
        <img src="src/assets/img/flyingKero.png"  alt="Kero" className={styles.Kero} />
        <div className={styles.TextBubble}>
          <img src="src/assets/img/cloud.webp" alt="Text Cloud" className={styles.Cloud} />
          <p className={styles.BubbleText}>Type a nickname and press start to begin your tarot reading!</p>
        </div>
        <div className={styles.ButtonsContainer}>
          <div className={styles.InputContainer}>
            <img src="src/assets/img/sakura.png" alt="Sakura" className={styles.Sakura} />
            <input 
              type="text" 
              placeholder="name" 
              className={styles.InputField} 
              value={nickname} 
              onChange={handleInputChange}
            /> 
          </div>
          <button className={styles.StartButton} onClick={handleStart}>
            <img src="src/assets/img/cartas.png" alt="Cards" className={styles.Cards} /> Start
          </button>
        </div> 
      </div>
    </div>
  );
}

export default Home;
