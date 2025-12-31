import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import styles from "./Home.module.css";
import profile from "../../assets/image.png";

export default function Home() {
    const navigate = useNavigate();

    return (
        <section className={styles.hero}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.greeting}>
                    <span>Hi there!</span> <span role="img" aria-label="wave">👋</span> I'm
                </div>
                <h1 className={styles.title}>
                    Sutanu <br /> Dutta
                </h1>
                <p className={styles.description}>
                    14 years of software craftmanship, delivering solutions which customers love to use. Extensive experience in building, architecting and shipping solutions at scale.
                </p>

                <div className={styles.actions}>
                    <button onClick={() => navigate("/about#contact")} className={styles.primaryBtn}>
                        Let's Talk <ArrowRight size={18} />
                    </button>
                    <button className={styles.secondaryBtn}>
                        Download CV <Download size={18} />
                    </button>
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                    {[
                        { Icon: Twitter, url: "https://x.com/the_ai_insomnia" },
                        { Icon: Linkedin, url: "https://www.linkedin.com/in/sutanu-dutta-85b061112/" },
                        { Icon: Github, url: "https://github.com/sutanud04" }
                    ].map(({ Icon, url }, i) => (
                        <a
                            key={i}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryBtn}
                            style={{ padding: "0.7rem", borderRadius: "50%" }}
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className={styles.imageContainer}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className={styles.backgroundText}>Senior Software Engineer</div>
                <img
                    src={profile}
                    alt="Profile"
                    className={styles.profileImage}
                />

                {/* Floating Icons roughly matched to design */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '0%', right: '0%', padding: '1rem', background: 'var(--bg-card)', borderRadius: '50%', boxShadow: 'var(--shadow-md)' }}
                >
                    <span style={{ fontWeight: 'bold', color: '#3178c6' }}>AI/ML</span>
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    style={{ position: 'absolute', bottom: '20%', left: '-5%', padding: '1rem', background: 'var(--bg-card)', borderRadius: '50%', boxShadow: 'var(--shadow-md)' }}
                >
                    <span style={{ fontWeight: 'bold', color: '#61dafb' }}>Java</span>
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '0%', right: '100%', padding: '1rem', background: 'var(--bg-card)', borderRadius: '50%', boxShadow: 'var(--shadow-md)' }}
                >
                    <span style={{ fontWeight: 'bold', color: '#3178c6' }}>Python</span>
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '100%', right: '0%', padding: '1rem', background: 'var(--bg-card)', borderRadius: '50%', boxShadow: 'var(--shadow-md)' }}
                >
                    <span style={{ fontWeight: 'bold', color: '#3178c6' }}>C#</span>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '50%', right: '0%', padding: '1rem', background: 'var(--bg-card)', borderRadius: '50%', boxShadow: 'var(--shadow-md)' }}
                >
                    <span style={{ fontWeight: 'bold', color: '#3178c6' }}>ReactJS</span>
                </motion.div>

            </motion.div>

        </section>
    );
}
