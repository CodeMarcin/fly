import styles from './Top.module.css';

type TopProps = {
  children: React.ReactNode;
};

export const Top = ({ children }: TopProps) => {
  return <div className={styles['top']}>{children}</div>;
};
