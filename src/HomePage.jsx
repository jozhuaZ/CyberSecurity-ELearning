import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './homestyles.module.css';
import Header from './Components/Header/Header';
import { LessonCard } from './Components/Lesson Card/lessonCard';
import lessons from './Lessons/lessons';

export default function HomePage() {
    const navigation = useNavigate();
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [topics] = useState(Object.entries(lessons));

    const handleLogout = () => {
        if (window.confirm('Are you sure to logout?')) {
            navigation('/LoginPage');
        }
    }

    return (
        <>
            <Header navigation={navigation}/>

            <main className={styles.main_container}>
                <section className={styles.new_section}>
                    <h1  style={{ font: '500 2rem Poppins', textDecoration: 'underline' }}>What's New!</h1>
                    <div className={styles.topic_container}>
                        {topics.map(([key, topic]) => (
                            <LessonCard
                                key={key}
                                title={topic.title}
                                image={topic.image}
                                description={topic.overview}
                                topicKey={key}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}