import React from 'react';

export const BallotContext = React.createContext({
  nominees: [],
  setNominees: () => null,
});

const BallotContextProvider = ({ children }) => {
  const [nominees, setNominees] = React.useState([]);
  const contextValues = { nominees, setNominees };
  return (
    <BallotContext.Provider value={contextValues}>
      {children}
    </BallotContext.Provider>
  );
};

export default BallotContextProvider;
