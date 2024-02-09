import * as React from 'react';
import styles from './Home.module.scss'

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <div className={styles.home}>
      Home
    </div>
  );
}



