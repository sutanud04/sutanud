import styles from "./Experience.module.css";

const experiences = [
    {
        role: "Senior Software Engineer",
        company: "Microsoft",
        date: "2024 - Present",
        description: [
            "Built the Team Member experience in Project Operations from scratch, shipping the module used by end users across a product with 750K monthly active users.",
            "Designed and shipped delegation in the Time module as sole engineer, one of the most requested enterprise capabilities in the module, covering permission modelling, approval routing and audit.",
            "Architected a reusable React/TypeScript grid platform supporting configurable columns, actions, filtering and Dataverse integration; adopted across Project Operations product areas, reducing implementation effort for new grid experiences and improving product-wide UI consistency.",
            "Architected and built a domain-specific RAG pipeline and LLM agent using LangChain, combining vector search over a curated product corpus with targeted retrieval, Reciprocal Rank Fusion (RRF), reranking, and prompt engineering to deliver grounded answers to complex product and configuration queries previously requiring specialist escalation, currently deployed for internal product support.",
            "Re-architected batch processing to eliminate system slowness for the largest enterprise tenants, restoring processing within customer SLAs.",
            "Selected member of the product group's Performance Engineering focus group and UI Centre of Excellence, defining engineering standards and review practices adopted across the product group."
        ]
    },
    {
        role: "Vice President (IT)",
        company: "Morgan Stanley",
        date: "2019 - 2024",
        description: [
            "Re-architected the batch processing engine, cutting end-to-end runtime by 6 hours while processing 45 million rows daily and substantially raising throughput, bringing downstream reporting inside its daily processing SLA.",
            "Optimized backend APIs from 50s to under 5s response time (10x improvement) through query tuning, caching and payload restructuring.",
            "Led the migration from monolith to microservices, improving scalability, deployment independence and fault isolation across the platform.",
            "Built and led a 12-engineer team - hiring, mentoring, performance management and career development, while remaining hands-on in architecture and code review.",
            "Defined engineering standards, architectural guidelines and SLAs adopted as the team’s delivery baseline."
        ]
    },
    {
        role: "Senior Software Engineer",
        company: "JPMorgan Chase",
        date: "2018 - 2019",
        description: [
            "Built cloud-native microservices handling up to 2,000 TPS using the Netflix OSS stack (Eureka, Ribbon, Hystrix) and distributed systems patterns for service discovery, load balancing and fault tolerance.",
            "Implemented Jenkins CI/CD pipelines automating build, test and deployment, reducing release cycle time and manual deployment error.",
            "Mentored junior engineers on distributed systems design and code quality practices."
        ]
    },
    {
        role: "Software Engineer",
        company: "Credit Suisse",
        date: "2015 - 2018",
        description: [
            "Built data processing services handling 36M records daily at sub-second SLA for mission-critical financial reporting.",
            "Cut feed generation time by 2 hours by introducing parallel processing across previously sequential workflows.",
            "Performance-tuned and optimized latency-sensitive trading and reporting applications."
        ]
    },
    {
        role: "Software Engineer",
        company: "Tata Consultancy Services",
        date: "2011 - 2015",
        description: [
            "Designed and built an authorization system from scratch on Orient DB with the Gremlin query engine, modelling complex hierarchical permissions as a graph.",
            "Delivered backend services and system integrations across multiple enterprise client environments."
        ]
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
                        {Array.isArray(exp.description) ? (
                            <ul className={styles.descriptionList}>
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className={styles.description}>{exp.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
