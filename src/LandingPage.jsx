import styles from './landingstyles.module.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigation = useNavigate();

    return (
        <div className={styles.landing_page}>
            <div className={styles.content_container}>
                <h2 className={styles.title}>CYBERSECURITY</h2>
                <p className={styles.description}>
                    Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks typically aim to access, change, or destroy sensitive information, extort money from users, or interrupt normal business processes. Cybersecurity is increasingly important as our dependence on digital systems grows. Both individuals and organizations need to prioritize security measures to protect sensitive information and maintain digital safety.
                </p>
                <button className={styles.get_started} onClick={() => navigation('/LoginPage')}>Get Started</button>
            </div>
        </div>
    );
}