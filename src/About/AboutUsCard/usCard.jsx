import { useEffect, useState } from 'react';
import styles from './usCardstyles.module.css';

export const UsCard = ({ student }) => {

    return (
        <a
            key={student.id}
            href={student.link}
            target="_blank"
            rel="noreferrer"
            className={styles.us_card}
        >
            <img src={student.image} alt={student.name} className={styles.us_card_image} />
            <div className={styles.us_card_content}>
                <h3>{student.name}</h3>
                <p>Section: {student.section}</p>
                <p>Birthdate: {student.birthdate}</p>
                <p>{student.description}</p>
            </div>
        </a>
    );
};
