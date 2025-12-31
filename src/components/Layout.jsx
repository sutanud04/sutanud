import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Layout.module.css";

export function Layout() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Navbar />
                <div className={styles.themeWrapper}>
                    <ThemeToggle />
                </div>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                © {new Date().getFullYear()} Sutanu Dutta. All rights reserved.
            </footer>
        </div>
    );
}
