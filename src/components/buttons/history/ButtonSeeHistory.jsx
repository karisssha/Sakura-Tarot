import React from 'react'
import styles from './ButtonSeeHistory.module.css'
import { useNavigate } from 'react-router';


const ButtonSeeHistory = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/favorites');
  };


  return (
    <button className={styles.SeeHistory} onClick={handleClick}> 
      <p className= {styles.Text}>see history</p>
      <img className= {styles.SmallKero} src="/src/assets/img/keroIcon.png" alt="Button History" />
    </button>
  );
};


export default ButtonSeeHistory