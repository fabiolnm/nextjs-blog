import styles from './layout.module.sass'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}
