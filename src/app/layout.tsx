
import Sidebar from "./components/sidebar/Sidebar";
import "./globals.css";
import styles from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>My App Header</header>
        <div className={styles.container}>
          <Sidebar /> {/* Not a hook directly in layout */}
          {/* <aside className={styles.sidebar}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
                <ul className={styles.subMenu}>
                  <li>
                    <a href="/about/detail">Detail</a>
                  </li>
                  { <li><a href="/about/team">Team</a></li> example extra subpage }
                </ul>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
            </ul>
          </aside> */}
          <main className={styles.content}>{children}</main>
        </div>
        <footer className={styles.footer}>Footer</footer>
      </body>
    </html>
  );
}
