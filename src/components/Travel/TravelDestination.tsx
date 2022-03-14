import React from 'react';

import styles from './CSS/TravelDestination.module.css';

type TravelDestinationProps = {
  children: React.ReactNode;
};

export const TravelDestination = ({ children }: TravelDestinationProps) => {
  return <div className={styles['travel__destination']}>{children}</div>;
};
