
import styles from '../buttonSound/ButtonSound.module.css'
import soundOn from '../../assets/img/soundOn.png'
import soundOff from '../../assets/img/soundOff.png'



const ButtonSound = ({ isPlaying, toggleSound }) => {

    return (
        <button className={styles.button} onClick={toggleSound}>
            <img src={isPlaying ? soundOn : soundOff} alt="Button Sound" />
        </button>
    );
};

export default ButtonSound