import React from 'react';
import useBallotContext from '../../Hooks/useBallotContext';
import useGetBallotData from '../../Hooks/useGetBallotData';
import BallotLists from './Components/BallotLists/BallotLists.component';
import Modal from './Components/Modal';
import styles from './Ballot.module.css';
const Ballot = () => {
  const [isLoading, data] = useGetBallotData();
  const [isModalOpen, setIsMOdalOpen] = React.useState(false);
  const { nominees } = useBallotContext();

  const handleModalOpen = () => {
    if (!nominees.length > 0) return;
    setIsMOdalOpen(prev => !prev);
  };

  if (isLoading) <h1>Loading...</h1>;

  return (
    <>
      <section className={styles.ballotSection}>
        <div className='container'>
          {data?.map(item => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <BallotLists lists={item.items} uniqueId={item.id} />
            </div>
          ))}
          <button className={styles.button} onClick={handleModalOpen}>
            submit ballot
          </button>
        </div>
      </section>
      {isModalOpen ? <Modal onHandleModalOpen={handleModalOpen} /> : null}
    </>
  );
};
export default Ballot;
