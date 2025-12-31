import styles from "./Blogs.module.css";
import { ArrowRight } from "lucide-react";

// Map of blog/article keys to their actual URLs (e.g. Medium links)
const BLOG_LINKS = {
    "vectorclock": "https://medium.com/dev-genius/vector-clock-how-distributed-systems-handle-event-ordering-ef64e852142a",
    "websocket": "https://medium.com/javarevisited/websocket-in-depth-aaed3c6dcc6d",
    "kafka2": "https://medium.com/dev-genius/why-kafka-ditched-zookeeper-1add2f204d11",
    "ssl1": "https://medium.com/@sutanu3011/ssl-internals-explained-to-save-lives-3ca3c40dce3e",
    "oauth1": "https://medium.com/@sutanu3011/oauth-simplified-in-depth-analysis-814d09112419",
    "kafka1": "https://medium.com/@sutanu3011/oauth-simplified-in-depth-analysis-814d09112419https://medium.com/@sutanu3011/kafka-with-real-world-understanding-fba71c042ace",
    "disthash": "https://medium.com/@sutanu3011/uncover-the-mystery-of-chord-56f8d216b7e0",
    "merkle": "https://medium.com/@sutanu3011/the-story-of-merkle-tree-42f9f268b1d5",
    // Papers
    "paxos": "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf",
    "dynamo": "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf",
    "gptfoundation": "https://arxiv.org/pdf/1706.03762"
};

const blogPosts = [
    { date: "May 17, 2025", title: "Vector Clock: How Distributed Systems Handle Event Ordering", key: "vectorclock" },
    { date: "Jan 1, 2025", title: "WebSocket in Depth", key: "websocket" },
    { date: "Nov 3, 2024", title: "Why Kafka ditched Zookeeper", key: "kafka2" },
    { date: "Sep 22, 2024", title: "SSL Internals Explained to Save Lives", key: "ssl1" },
    { date: "Aug 10, 2024", title: "OAuth Simplified: In-depth Analysis", key: "oauth1" },
    { date: "Jul 13, 2024", title: "Kafka with Real World Understanding", key: "kafka1" },
    { date: "Dec 14, 2023", title: "Distributed Hashing: Chord", key: "disthash" },
    { date: "Oct 16, 2023", title: "Merkle Trees Explained: How They Work and Their Applications in Technology", key: "merkle" },
];

const papers = [
    { date: "2024", title: "Paxos: A Simple Consensus Algorithm", key: "paxos" },
    { date: "2025", title: "Dynamo DB architecture", key: "dynamo" },
    { date: "2025", title: "The attention is all you need", key: "gptfoundation" },
];

export default function Blogs() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div>
                    <h2 className={styles.columnHeading}>
                        Recent blog posts
                    </h2>
                    <p className={styles.subHeading}>Things I have written recently.</p>
                    <ul className={styles.list}>
                        {blogPosts.map((post, index) => (
                            <li key={index} className={styles.listItem}>
                                <span className={styles.date}>{post.date}</span>
                                <span className={styles.separator}>:</span>
                                <a
                                    href={BLOG_LINKS[post.key] || "#"}
                                    className={styles.postLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {post.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className={styles.columnHeading}>
                        Recent papers
                    </h2>
                    <p className={styles.subHeading}>Papers I have read recently.</p>
                    <ul className={styles.bulletList}>
                        {papers.map((paper, index) => (
                            <li key={index} className={styles.bulletListItem}>
                                <a
                                    href={BLOG_LINKS[paper.key] || "#"}
                                    className={styles.postLink}
                                    style={{ color: 'inherit', textDecoration: 'none' }} // Papers might not need to look like links, but making them clickable
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {paper.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
