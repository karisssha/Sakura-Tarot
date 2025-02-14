import React from 'react'
import styles from './ButtonRestart.module.css'


const ButtonRestart = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <button className={styles.Restart} onClick={handleClick}> 
      <p className= {styles.Text}>restart</p>
      <img className= {styles.SakuraFlower} src="/src/assets/img/sakuraFlower.png" alt="Restart Button" />
    </button>
  );
};

export default ButtonRestart;