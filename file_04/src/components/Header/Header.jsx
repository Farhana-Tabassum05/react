import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
        <h4>The first learning steps</h4>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header