import useBallotContext from '../../../../Hooks/useBallotContext';
import BallotCard from '../BallotCard/BallotCard.component';
import styles from './Modal.module.css';
const Modal = ({ onHandleModalOpen }) => {
  const { nominees } = useBallotContext();
  return (
    <div className={styles.modal}>
      <div className={styles.modalBody}>
        <div className={styles.modalHeader}>
          <h2>Movie Awards Nominees 2021</h2>
          <button onClick={onHandleModalOpen}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.modalContentWrapper}>
            {nominees?.map(item => (
              <BallotCard
                key={item.id}
                item={{ photoUrL: item.photoUrL, title: item.title }}
                modal
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
