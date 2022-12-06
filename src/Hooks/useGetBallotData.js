import React from 'react';
import api from '../Api/Api';
const useGetBallotData = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { items } = await api.getBallotData();
        // throw error if data is not available
        setData(items);
      } catch (e) {
        // catch error if data is not available
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return [isLoading, data];
};
export default useGetBallotData;
