import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '/src/pages/home/Home.module.css';


function Home() {
  const [nickname, setNickname] = useState(() => localStorage.getItem('nickname') || '');
  const [currentDate, setCurrentDate] = useState(() => localStorage.getItem('currentDate') || new Date().toISOString().split('T')[0]);
  const [showAlert, setShowAlert] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('nickname', nickname);
  }, [nickname]);

  useEffect(() => {
    localStorage.setItem('currentDate', currentDate);
  }, [currentDate]);

  const handleStart = async () => {
    if (!nickname.trim()) {
      setShowAlert(true); 
      return;
    }

    try {
      // const cards = await FetchCards(); // Debería ir con la página de Cards
      // console.log(cards);
      const today = new Date().toISOString().split('T')[0];
      setCurrentDate(today);
      localStorage.setItem('currentDate', today);
      console.log(`Nickname: ${nickname}`);
      console.log(`Date: ${today}`);
      navigate('/cards');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, '').slice(0, 12);
    setNickname(value);
  };

  return (
    <div className={styles.MainContainer}>
      <h1 className={styles.Welcome}>Welcome to Sakura Tarot</h1>
      <div className={styles.ContentWrapper}>
        <img src="src/assets/img/flyingKero.png" alt="Kero" className={styles.Kero} />
        <div className={styles.TextBubble}>
          <img src="src/assets/img/cloud.png" alt="Text Cloud" className={styles.Cloud} />
          <p className={styles.BubbleText}>
            Type a nickname and press start to begin your tarot reading!
          </p>
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
          <button
            className={styles.StartButton}
            onClick={handleStart}
          >
            <img src="src/assets/img/cartas.png" alt="Cards" className={styles.Cards} /> Start
          </button>
        </div>
      </div>

      {/* ALERT */}
      {showAlert && (
        <div className={styles.AlertOverlay}>
          <div className={styles.AlertBox}>
            <p>Please enter a nickname before starting.</p>
            <button onClick={() => setShowAlert(false)}>Accept</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
