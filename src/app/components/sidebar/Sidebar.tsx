"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  return (
    <aside className={styles.sidebar}>
      <ul>
        <li className={isActive("/") ? styles.active : ""}>
          <Link href="/">Home</Link>
        </li>

        <li className={pathname.startsWith("/about") ? styles.active : ""}>
          <Link href="/about">About</Link>

          <ul className={styles.subMenu}>
            <li className={isActive("/about/detail") ? styles.active : ""}>
              <Link href="/about/detail">Detail</Link>
            </li>
          </ul>
        </li>

        <li className={isActive("/blogs") ? styles.active : ""}>
          <Link href="/blogs">Blogs</Link>
        </li>

        <li className={isActive("/contact") ? styles.active : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </aside>
  );
}
