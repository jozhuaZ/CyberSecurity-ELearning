import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import lessons from './lessons';
import styles from './lessonstyles.module.css';

export default function LessonPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigation = useNavigate();
    const { topic } = useParams();
    const lesson = lessons[topic];

    return (
        <>
            <Header navigation={navigation} />

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