import styles from '../home_page.module.css'; 

export default function Page() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>About Page</h1>
      <p className={styles.subTitle}>
        This is the About page content 🚀
      </p>
    </div>
  );
}
