import styles from './lessoncardstyles.module.css';
import { Link } from 'react-router-dom';

export const LessonCard = ({image, description, topic}) => {
    return(
        <Link to={`../Lessons/${topic}`} className={styles.card_container}>
            <img src={image} alt='Topic' />
            <p>{description}</p>
        </Link>
    );
}