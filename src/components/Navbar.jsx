import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { cn } from "../lib/utils";

const links = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Work Exp", path: "/experience" },
    { name: "Blogs", path: "/blogs" }
];

export function Navbar() {
    return (
        <nav className={styles.navContainer}>
            {links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => cn(styles.link)}
                >
                    {({ isActive }) => (
                        <>
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className={styles.activeBackground}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span style={{ position: "relative", zIndex: 1, color: isActive ? "#fff" : "inherit" }}>
                                {link.name}
                            </span>
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
}
