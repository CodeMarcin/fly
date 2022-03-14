import { useContext } from 'react';

import { TravelContext } from '../Contexts/TravelContex';
import { TravelSection } from './TravelSection';
import { TravelDestination } from './TravelDestination';
import { TravelSummary } from './TravelSummary';
import { AddDestination } from '../Buttons/AddDestination';
import { DeleteDestination } from '../Buttons/DeleteDestination';
import { TravelSelect } from './TravelSelect';

import styles from './CSS/Travel.module.css';
type TravelProps = {
  children: React.ReactNode;
};

export const Travel = ({ children }: TravelProps) => {
  const { travelPath } = useContext(TravelContext);

  return (
    <div className={styles['travel']}>
      {travelPath.map((item, index) => {
        return (
          <TravelSection className={styles['section']}>
            <TravelDestination key={index}>
              <TravelSelect pathID={index} />
              <DeleteDestination pathID={index} />
            </TravelDestination>
          </TravelSection>
        );
      })}
      <AddDestination />
      <TravelSummary />
    </div>
  );
};
