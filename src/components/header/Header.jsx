import { Link } from 'react-router'
import logo from '../../assets/img/baritaMouse.png'
import styles from '../header/Header.module.css'
import ButtonSound from '../buttonSound/ButtonSound'
import information from '../../assets/img/infoButton.png'

function Header({ isPlaying, toggleSound }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <img src={logo} alt="sakuralogo" className={styles.logo}/>
        <Link to={"/"}>Sakura Cards Tarot</Link>
      </div>
      <div className={styles.containerRight}>
        <a href="/info">
          <img src={information} alt="Information" className={styles.infoButton}/>
        </a>
        <ButtonSound isPlaying={isPlaying} toggleSound={toggleSound}/>
      </div>
    </div>
  )
}

export default Header
