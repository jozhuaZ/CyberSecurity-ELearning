import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './aboutstyles.module.css';
import Header from '../Components/Header/Header';
import { UsCard } from './AboutUsCard/usCard';

export default function AboutPage() {
    const navigation = useNavigate();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('/about_us.xml')
            .then(response => response.text())
            .then(str => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(str, "application/xml");
                const studentNodes = Array.from(xml.getElementsByTagName("student"));

                const data = studentNodes.map(student => ({
                    id: student.getAttribute('id'),
                    name: student.getElementsByTagName('name')[0]?.textContent,
                    section: student.getElementsByTagName('section')[0]?.textContent,
                    birthdate: student.getElementsByTagName('birthdate')[0]?.textContent,
                    image: student.getElementsByTagName('image')[0]?.textContent,
                    description: student.getElementsByTagName('description')[0]?.textContent,
                    link: student.getElementsByTagName('account_link')[0]?.textContent
                }));

                setStudents(data);
            })
            .catch(err => console.error("Failed to load XML:", err));
    }, []);

    return (
        <>
            <Header navigation={navigation} />

            <main className={styles.main_container}>
                <section className={styles.us_card_container}>
                    {students?.map((student) => (
                        <UsCard student={student} />
                    ))}
                </section>

                <section className={styles.about_description}>
                    <p><span onClick={() => navigation('/HomePage')} className={styles.link}>CyberSafe Academy</span> is an interactive e-learning platform dedicated to teaching cybersecurity fundamentals and advanced techniques. Whether you're a beginner or an aspiring ethical hacker, our site offers hands-on labs, real-world scenarios, and expert-led courses to help you build strong cyber defense skills. Learn at your own pace and stay ahead in today’s digital world.</p>
                </section>
            </main>
        </>
    );
};