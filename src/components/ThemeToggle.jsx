import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        }
        return "light";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={toggleTheme}
            className={styles.toggle}
            aria-label="Toggle theme"
            title="Toggle theme"
        >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}
