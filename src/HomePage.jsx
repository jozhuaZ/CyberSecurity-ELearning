import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './homestyles.module.css';
import headerStyles from './headerstyles.module.css';
import attackTargets from './assets/attack_targets.png';
import phishing from './assets/phishing.webp';
import malware from './assets/malware.jpg';
import { LessonCard } from './Components/Lesson Card/lessonCard';

export default function HomePage() {
    const navigation = useNavigate();
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        if (window.confirm('Are you sure to logout?')) {
            navigation('/LoginPage');
        }
    }

    return (
        <>
            <header>
                <div className={`${headerStyles.menu_container} ${isMenuOpen ? headerStyles.menu_open : headerStyles.menu_close}`}>
                    <h2 className={isMenuOpen ? headerStyles.menu_close : ''} onClick={() => {setIsMenuOpen(!isMenuOpen)}}>X</h2>
                    <ul>
                        <li>Home</li>
                    </ul>
                </div>
                
                <div className={headerStyles.left_side}>
                    <h2 style={{ cursor: 'pointer' }} onClick={() => {setIsMenuOpen(!isMenuOpen)}}>☰</h2>
                    <h3>E-Learning Website for CyberSecurity</h3>
                </div>
                <div className={headerStyles.right_side}>
                    <div className={headerStyles.logout_button} onClick={() => handleLogout()}>
                        Log Out
                    </div>
                </div>
            </header>

            <main className={styles.main_container}>
                <section className={styles.new_section}>
                    <h1  style={{ font: '500 2rem Poppins', textDecoration: 'underline' }}>What's New!</h1>
                    <div className={styles.topic_container}>
                        <LessonCard image={attackTargets} description={'Attack targets are the specific entities, systems, or data that malicious actors aim to compromise. These can range from individual devices to entire organizational networks and critical infrastructure.'}
                            topic={'attack-targets'} />
                        <LessonCard image={phishing} description={'Phishing attacks use deceptive communications that appear to come from trusted sources to trick recipients into revealing sensitive information or installing malware.'} 
                            topic={'phishing'} />
                        <LessonCard image={malware} description={'Malware (malicious software) is designed to damage, disrupt, or gain unauthorized access to computer systems. It can spread through various methods and has diverse capabilities.'} 
                            topic={'malware-infections'} />
                    </div>
                </section>

                <section>

                </section>
            </main>
        </>
    );
}