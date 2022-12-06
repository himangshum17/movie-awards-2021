import BallotCard from '../BallotCard/BallotCard.component';
import styles from './BallotLists.module.css';
const BallotLists = ({ lists, uniqueId }) => {
  return (
    <div className={styles.BallotLists}>
      {lists?.map(item => (
        <BallotCard key={item.id} item={item} uniqueId={uniqueId} />
      ))}
    </div>
  );
};
export default BallotLists;
