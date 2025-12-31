import { useState } from "react";
import styles from "./ContactForm.module.css";
import { Send } from "lucide-react";

export function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        window.location.href = `mailto:sutanu3011@gmail.com?subject=${subject}&body=${body}`;
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className={styles.input}
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className={styles.input}
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                    id="message"
                    placeholder="How can I help you?"
                    className={styles.textarea}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
            </div>
            <button type="submit" className={styles.submitBtn}>
                Send Message <Send size={16} style={{ display: 'inline', marginLeft: 8 }} />
            </button>
        </form>
    );
}
