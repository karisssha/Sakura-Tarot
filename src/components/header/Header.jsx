import logo from '../assets/img/baritaMouse.png'
import styles from'/src/components/header/header.module.css'

function Header() {
  return (
      <div className={styles.containerLeft}>
        <img src={logo} alt="sakuralogo"/>
        <Link to={"/"}>Sakura Cards Tarot</link>
      </div>
      <div className={styles.containerRight}>
        <button className={styles.botonOnStyle}></button>
      </div>
  )
}

export default Header
