
import { Link } from 'react-router'
import logo from '../../assets/img/baritaMouse.png'
import styles from '../header/Header.module.css'
import ButtonSound from '../buttonSound/ButtonSound'
import information from '../../assets/img/infoButton.png'

function Header() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <img src={logo} alt="sakuralogo"/>
        <Link to={"/"}>Sakura Cards Tarot</Link>
      </div>
      <div className={styles.containerRight}>
        <a href="/info">
          <img src={information} alt="Information"/>
        </a>
        <ButtonSound/>
      </div>
    </div>
    </>
  )
}

export default Header
