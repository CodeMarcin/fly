import { useContext } from 'react';

import { ConnectionsArray } from '../../arrays/ConnectionsArray';
import { AirportArray } from '../../arrays/AirportArray';

import { useCreateConnectionsList } from '../../hooks/useCreateConnectionsList';
import { useSearchConnection } from '../../hooks/useSearchConnection';

import { TravelContext } from '../Contexts/TravelContex';

import styles from './CSS/TravelSummary.module.css';


export const TravelSummary = () => {
  const { travelPath } = useContext(TravelContext);

  const connectionsArray = useCreateConnectionsList(
    AirportArray,
    ConnectionsArray
  );

  const searchConnection = useSearchConnection(travelPath, connectionsArray);

  return (
    <div className={styles['travel__summary']}>
      {searchConnection.map((item: string[], index: number, arr: string[]) => {
        return (
          <div className={styles['travel__summary-connection']}>
            {item.map((airport: string) => {
              return (
                <p className={styles['travel__summary-airport']}> {airport}</p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
