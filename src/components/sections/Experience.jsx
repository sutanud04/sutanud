import styles from "./Experience.module.css";

const experiences = [
    {
        role: "Senior Software Engineer",
        company: "Microsoft",
        date: "2024 - Present",
        description: "Building products for our customers in dynamics 365 ecosystem."
    },
    {
        role: "Vice President (IT)",
        company: "Morgan Stanley",
        date: "2019 - 2024",
        description: "Built a platform for Private Bankers, to manage the customers portfolio. Orchestrating the architectural migration of projects from monolith to microservices, enhancing scalability and optimizing project execution. Collaborating with management teams to develop and execute technical strategies aligned with client vision, ensuring exceptional project delivery and client satisfaction."
    },
    {
        role: "Senior Software Engineer",
        company: "JPMorgan Chase",
        date: "2018 - 2019",
        description: "Built a platform for structured product. Contributed to critical service components, managing 2000 TPS, and utilized industry-standard Netflix microservices tech stack for development."
    },
    {
        role: "Software Engineer",
        company: "Credit Suisse",
        date: "2015 - 2018",
        description: "Built a platform for credit and market risk calculation. Contributed key service components processing 36 million records daily, optimizing service response to accommodate SLA of < 1 second."
    },
    {
        role: "Software Engineer",
        company: "Tata Consultancy Services",
        date: "2011 - 2015",
        description: "Built multiple applications for Ameriprise Financial using cutting edge technologies like redis, neo4j and java based microservices."
    }
];

export default function Experience() {
    return (
        <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>My Experience</h2>
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.header}>
                            <div>
                                <div className={styles.role}>{exp.role}</div>
                                <div className={styles.company}>{exp.company}</div>
                            </div>
                            <span className={styles.date}>{exp.date}</span>
                        </div>
                        <p className={styles.description}>{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
