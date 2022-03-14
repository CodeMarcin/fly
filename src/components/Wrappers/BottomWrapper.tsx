import React from 'react';
import styles from './BottomWrapper.module.css';

type BottomWrapperProps = {
  children: React.ReactNode;
};

export const BottomWrapper = ({children}: BottomWrapperProps) => {
  return (
    <div className={styles['bottomWrapper']}>
      <div className={styles['bottomWrapper__content']}>{children}</div>
    </div>
  );
};
