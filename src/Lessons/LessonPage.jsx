import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lessons from './lessons';
import styles from './lessonstyles.module.css';
import headerStyles from '../headerstyles.module.css';

export default function LessonPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigation = useNavigate();
    const { topic } = useParams();
    const lesson = lessons[topic];

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
                        <li onClick={() => {navigation('../HomePage')}}>Home</li>
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
                <div className={styles.title_container}>
                    <h1>{lesson.title}</h1>
                </div>
                <div className={styles.overview_container}>
                    <p>{lesson.overview}</p>
                </div>

                <div className={styles.lesson_container}>
                    {/* Left Side - Content */}
                    <div className={styles.lesson_content}>
                        {lesson.content.map((section, index) => (
                            <div key={index} className={styles.section}>
                                <h2>{section.heading}</h2>
                                {section.text.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Image */}
                    <div className={styles.lesson_image}>
                        <img src={lesson.image} alt={lesson.title} />
                    </div>
                </div>
            </main>
        </>
    );
}