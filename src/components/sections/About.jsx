import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContactForm } from "../ContactForm";
import styles from "./About.module.css";

export default function About() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <div className={styles.section}>
            <div className={styles.intro}>
                <h2 className={styles.heading}>About Me</h2>
                <p className={styles.bio}>
                    With 14+ years of experience as a developer, lead, and architect, I bring a wealth of technical expertise, leadership abilities, and architectural acumen to any software development project. I am dedicated to delivering exceptional results, driving innovation, and leveraging my experience to contribute to organizations' success.
                </p>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>14+</span>
                        <span className={styles.statLabel}>Years Exp.</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>5+</span>
                        <span className={styles.statLabel}>Fortune 100 companies</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>10+</span>
                        <span className={styles.statLabel}>projects</span>
                    </div>
                </div>
            </div>

            <div id="contact" className={styles.contactSection}>
                <div>
                    <h3 className={styles.contactHeading}>Let's Work Together</h3>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                        Have a project in mind? Fill out the form below.
                    </p>
                </div>
                <ContactForm />
            </div>
        </div>
    );
}
