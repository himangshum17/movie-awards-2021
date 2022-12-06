import React from 'react';
import { BallotContext } from '../Context/Ballot.context';

const useBallotContext = () => {
  const { nominees, setNominees } = React.useContext(BallotContext);
  return { nominees, setNominees };
};
export default useBallotContext;
