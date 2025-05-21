import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import styles from './tipstyles.module.css';
import tips from "./tips";

export default function TipsPage() {
    const navigation = useNavigate();

    return (
        <div className={styles.main_content}>
            <Header navigation={navigation} />

            <div style={{ padding: "2rem", fontFamily: "Poppins, sans-serif" }}>
                {Object.entries(tips).map(([sectionKey, section]) => (
                    <div key={sectionKey} style={{ marginBottom: "3rem" }}>
                        <h2 style={{ marginBottom: '1rem' }}>{section.title}</h2>
                        <ul style={{ paddingLeft: "1.2rem" }}>
                            {Object.entries(section.tip).map(([label, tip], idx) => (
                                <li key={label} style={{ marginBottom: "0.5rem" }}>
                                    <strong>{`Tip ${idx + 1}`}</strong>: {tip}
                                </li>
                            ))}
                        </ul>
                        <pre className={styles.body_description}>
                            {section.body}
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
}