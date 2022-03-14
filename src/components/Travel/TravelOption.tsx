import { useState, useEffect } from 'react';
type TravelOptionProps = {
  airport: string;
  pathID: number;
  travelPath: string[];
};
export const TravelOption = ({
  airport,
  pathID,
  travelPath,
}: TravelOptionProps) => {
  const [checkNextAndPrev, setCheckNextAndPrev] = useState(false);

  const checkNextPrevHandler = (
    travelPath: string[],
    pathID: number,
    airport: string
  ) => {
    if (
      travelPath[pathID - 1] !== airport &&
      travelPath[pathID + 1] !== airport
    ) {
      setCheckNextAndPrev(false);
    } else {
      setCheckNextAndPrev(true);
    }
  };

  useEffect(() => {
    checkNextPrevHandler(travelPath, pathID, airport);
  }, [travelPath, pathID, airport]);

  return (
    <>
      {!checkNextAndPrev ? (
        <option key={airport} value={airport}>
          {airport}
        </option>
      ) : (
        <option disabled key={airport} value={airport}>
          {airport}
        </option>
      )}
    </>
  );
};
