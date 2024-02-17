import styles from './ThisDayInfo.module.scss'
import cloud from './../../../../assets/images/cloud.svg'
import ThisDayItem from './ThisDayItem';

export interface IThisDayInfoProps {
}
export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export default function ThisDayInfo(props: IThisDayInfoProps) {
  const items: Item[] = [{
    icon_id: 'temp',
    name: 'Температура',
    value: '20° - ощущается как 17°'
  },
  {
    icon_id: 'pressure',
    name: 'Давление',
    value: '765 мм ртутного столба - нормальное'
  },
  {
    icon_id: 'precipitation',
    name: 'Осадки',
    value: 'Без осадков'
  },
  {
    icon_id: 'wind',
    name: 'Ветер',
    value: '3 м/с юго-запад - легкий ветер'
  },
  ]
  return (
    <div className={styles.thisDayInfo}>
      <div className={styles.thisDayInfoItems}>
        {items.map((item: Item) => (<ThisDayItem key={item.icon_id} item={item} />))}
        <img src={cloud} alt="Cloud" className={styles.cloudImg}/>
      </div>
    </div>
  );
}



