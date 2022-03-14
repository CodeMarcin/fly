import { useContext, useState, useEffect, useCallback } from 'react';
import { TravelContext } from '../Contexts/TravelContex';
type DeleteDestinationProps = {
  pathID: number;
};

export const DeleteDestination = ({ pathID }: DeleteDestinationProps) => {
  const { travelPath, dispatch } = useContext(TravelContext);
  const [checkPrevAndNext, setCheckPrevAndNext] = useState(false);

  const checkPrevNext = useCallback(() => {
    if (travelPath[pathID - 1] === travelPath[pathID + 1]) {
      setCheckPrevAndNext(true);
    } else {
      setCheckPrevAndNext(false);
    }
  }, [travelPath, pathID]);

  useEffect(() => {
    checkPrevNext();
  }, [checkPrevNext]);

  return !checkPrevAndNext ? (
    <button
      className="button"
      onClick={(e) => {
        dispatch({
          type: 'DELETE_DESTINATION',
          airportCity: e.currentTarget.value,
          pathIndex: pathID,
        });
      }}
    >
      Delete
    </button>
  ) : (
    <button className="button button--disable">Delete</button>
  );
};
