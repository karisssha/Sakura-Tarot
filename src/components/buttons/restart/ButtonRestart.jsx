import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './ButtonRestart.module.css'


const ButtonRestart = () => {
const navigate = useNavigate();
const location = useLocation();

const handleClick = () => {
if (location.pathname === '/cards') {
window.location.reload(); 
} else {
navigate('/cards');
}
};

return (
<button className={styles.Restart} onClick={handleClick}> 
<p className= {styles.Text}>restart</p>
<img className= {styles.SakuraFlower} src="/src/assets/img/sakuraFlower.png" alt="Restart Button" />
</button>
);
};

export default ButtonRestart;