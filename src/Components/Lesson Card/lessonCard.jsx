import styles from './lessoncardstyles.module.css';
import { Link } from 'react-router-dom';

export const LessonCard = ({ title, image, description, topicKey }) => {
    return (
        <Link to={`../Lessons/${topicKey}`} className={styles.card_container}>
            <h3>{title}</h3>
            <img src={image} alt='Topic' />
            <p>{description}</p>
        </Link>
    );
};