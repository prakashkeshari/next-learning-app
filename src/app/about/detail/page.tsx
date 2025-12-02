import styles from '../../home_page.module.css';


export default function AboutDetail(){
    return(
        <div className={styles.content}>
      <h1 className={styles.title}>About Detail Page</h1>
      <p className={styles.subTitle}>
        Welcome to About Detail Page
      </p>
    </div>
    )
}