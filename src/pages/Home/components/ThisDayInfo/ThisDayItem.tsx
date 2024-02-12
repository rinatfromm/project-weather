import { Item } from './ThisDayInfo';
import styles from './ThisDayInfo.module.scss'
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector';

export interface IThisDayItemProps {
  item: Item
}

export default function ThisDayItem({item }: IThisDayItemProps) {

  const { icon_id, name, value } = item


  return (
    <div className={styles.item}>
      <div className={styles.indicator}><IndicatorSvgSelector id={icon_id}/></div>
      <div className={styles.indicatorName}>{name}</div>
      <div className={styles.indicatorValue}>{value}</div>
    </div>
  );
}
