import { useContext, useEffect, useState } from 'react';
import { TravelContext } from '../Contexts/TravelContex';

export const AddDestination = () => {
  const { travelPath, dispatch } = useContext(TravelContext);
  const [countAirport, setCountAirport] = useState(travelPath.length);
  const [checkIsArrayHasEmpty, setCheckIsArrayHasEmpty] = useState(true);

  const checkArray = (array: string[]) => {
    if (array.includes('')) {
      setCheckIsArrayHasEmpty(false);
    } else {
      setCheckIsArrayHasEmpty(true)
    }
  };

  useEffect(() => {
    setCountAirport(travelPath.length);
    checkArray(travelPath);
  }, [travelPath.length, travelPath]);

  return checkIsArrayHasEmpty ? (
    <button className="button"
      onClick={(e) => {
        dispatch({
          type: 'ADD_DESTINATION',
          airportCity: '',
          pathIndex: countAirport,
        });
      }}
    >
      Add destination
    </button>
  ) : (
    <button className="button button--disable">Add destination</button>
  );
};
