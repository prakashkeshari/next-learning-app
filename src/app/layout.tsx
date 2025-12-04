
import Sidebar from "./components/sidebar/Sidebar";
import "./globals.css";
import styles from "./layout.module.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>Next Master Blog</header>
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.content}>{children}</main>
        </div>
        <footer className={styles.footer}>Blog Footer</footer>
      </body>
    </html>
  );
}
