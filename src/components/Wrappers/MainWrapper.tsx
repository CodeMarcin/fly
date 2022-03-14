import styles from './MainWrapper.module.css';

type MainWrapperProps = {
  children: React.ReactNode;
};

export const MainWrapper = ({ children }: MainWrapperProps) => {
  return <div className={styles['mainWrapper']}>{children}</div>;
};
