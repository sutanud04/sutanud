import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContactForm } from "../ContactForm";
import { Skills } from "../Skills";
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
                    Senior software engineer with 15 years of experience building and scaling full-stack, distributed, and enterprise systems across Microsoft, Morgan Stanley, J.P. Morgan, and Credit Suisse. Own end-to-end product features at Microsoft on Dynamics 365, serving 750K monthly active users, and previously led a 12-engineer team through a monolith-to-microservices transformation. Track record of high-impact performance engineering, including a 6-hour batch runtime reduction, 50s to sub-5s API latency, building 2,000 TPS distributed systems, and 45M-record/day data pipelines. Recent work includes architecting RAG-based LLM systems for domain-specific enterprise use cases.
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

            <Skills />

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
