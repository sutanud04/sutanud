import {
    Atom,
    Braces,
    Cloud,
    Coffee,
    Database,
    Hash,
    Leaf,
    Link,
    Network,
    Rocket,
    Table,
    Workflow
} from "lucide-react";
import styles from "./Skills.module.css";

const skills = [
    { name: "Java", Icon: Coffee, color: "#e76f00" },
    { name: "C#", Icon: Hash, color: "#9b4f96" },
    { name: "Python", Icon: Braces, color: "#3776ab" },
    { name: "TypeScript", Icon: Braces, color: "#3178c6" },
    { name: "React", Icon: Atom, color: "#61dafb" },
    { name: "Dataverse", Icon: Table, color: "#742774" },
    { name: "Spring", Icon: Leaf, color: "#6db33f" },
    { name: "Spring Boot", Icon: Rocket, color: "#6db33f" },
    { name: "Orient DB", Icon: Network, color: "#ff6600" },
    { name: "Oracle DB", Icon: Database, color: "#f80000" },
    { name: "Azure Foundry", Icon: Cloud, color: "#0078d4" },
    { name: "LangChain", Icon: Link, color: "#1c3c3c" },
    { name: "LangGraph", Icon: Workflow, color: "#1c3c3c" }
];

export function Skills() {
    return (
        <div className={styles.section}>
            <h3 className={styles.heading}>Skills</h3>
            <div className={styles.grid}>
                {skills.map(({ name, Icon, color }) => (
                    <div key={name} className={styles.card}>
                        <div className={styles.iconWrap} style={{ "--accent": color }}>
                            <Icon size={26} strokeWidth={1.75} />
                        </div>
                        <span className={styles.label}>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
