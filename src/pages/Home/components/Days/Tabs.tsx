import styles from './Days.module.scss'





export interface ITabsProps {
}

export interface ITab {
  value: string
}

export default function Tabs(props: ITabsProps) {
  const tabs: ITab[] = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ];


  return (
    <div className={styles.tabs}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => <div className={`${styles.tab}  ${styles.active} `} key={tab.value}>{tab.value}</div>)}
      </div>
      <div className={styles.cancel}>Отменить</div>
    </div >
  );
}
