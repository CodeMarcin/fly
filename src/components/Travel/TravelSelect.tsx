import React, { useContext, useState, useEffect } from 'react';
import { TravelContext } from '../Contexts/TravelContex';
import { AirportArray } from '../../arrays/AirportArray';

import styles from './CSS/TravelSelect.module.css';
import { TravelOption } from './TravelOption';

type TravelSelectProps = {
  pathID: number;
};

export const TravelSelect = ({ pathID }: TravelSelectProps) => {
  const { travelPath, dispatch } = useContext(TravelContext);
  const [currSelected, setCurrSelected] = useState('');

  useEffect(() => {
    setCurrSelected(travelPath[pathID]);
  }, [travelPath, pathID]);

  const pathIDToString = pathID.toString();

  return (
    <>
      <label
        className={styles['travel__destination-label']}
        htmlFor={pathIDToString}
      >
        Airport {pathID + 1}
      </label>
      <select
        value={currSelected}
        className={styles['travel__destination-select']}
        name={pathIDToString}
        onChange={(e) => {
          dispatch({
            type: 'ADD_DESTINATION',
            airportCity: e.currentTarget.value,
            pathIndex: pathID,
          });
        }}
      >
        <option value="" disabled>
          --- Choose a airport ---
        </option>

        {AirportArray.map((airport) => {
          return (
            <TravelOption
              airport={airport}
              pathID={pathID}
              travelPath={travelPath}
            />
          );
        })}
      </select>
    </>
  );
};
