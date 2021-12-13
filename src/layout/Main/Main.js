import styles from './style.module.css'
const Main = ({ children }) => {
	return <main className={styles.container}>{children}</main>
}

export default Main
