import * as React from 'react';
import styles from './styles.module.css';

export const FoodItem: React.FC<FoodItemProps> = ({ imageUrl, note }) => {
    return (
        <div className={styles.foodItem} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className={styles.note}>{note}</div>
        </div>
    );
};

interface FoodItemProps {
    imageUrl: string;
    note: string;
}
