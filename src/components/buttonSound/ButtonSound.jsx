import { useState} from 'react'
import styles from '../buttonSound/ButtonSound.module.css'
import soundOn from '../../assets/img/soundOn.png'
import soundOff from '../../assets/img/soundOff.png'



const ButtonSound = () => {
    const [isOn, setIsOn] = useState(true);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <button className={styles.button} onClick={handleClick}>
            <img src={isOn ? soundOn : soundOff} alt="Button Sound" />
        </button>
    );
};

export default ButtonSound