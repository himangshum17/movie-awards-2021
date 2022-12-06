import React from 'react';
import useBallotContext from '../../../../Hooks/useBallotContext';
import styles from './BallotCard.module.css';
const BallotCard = ({ item, uniqueId }) => {
  const { photoUrL, title } = item;
  const { nominees, setNominees } = useBallotContext();
  const handleNominees = item => {
    if (!nominees.some(e => e.uniqueId === item.uniqueId)) {
      setNominees(prev => [...prev, item]);
    }
  };
  return (
    <div
      className={`${styles.BallotCard} ${
        nominees.some(e => e.id === item.id) ? styles.BallotCardActive : ''
      }`}>
      <img src={photoUrL} alt={title} loading='lazy' />
      <h3 className={styles.title}>{title}</h3>
      <button
        className={styles.button}
        onClick={() => handleNominees({ uniqueId, ...item })}>
        Select
      </button>
    </div>
  );
};

export default BallotCard;
