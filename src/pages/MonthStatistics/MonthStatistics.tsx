import * as React from 'react';
import styles from './MonthStatistics.module.scss'

export interface IMonthStatisticsProps {
}

export default function MonthStatistics (props: IMonthStatisticsProps) {
  return (
    <div className={styles.home}>
      Month Statistics
    </div>
  );
}



