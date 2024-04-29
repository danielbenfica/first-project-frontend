import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://picsum.photos/65/65" alt="" />
      <h2>Júnia Estética</h2>
    </header>
  )
}

export default Header