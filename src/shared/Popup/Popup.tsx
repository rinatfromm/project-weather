import styles from './Popup.module.scss'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select'
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';

export interface IPopupProps {

}
export interface Item {
    icon_id: string;
    name: string;
    value: string;
}

export default function Popup(props: IPopupProps) {
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
        <>
            <div className={styles.blur}></div>
            <div className={styles.popup}>
                <div className={styles.day}>
                    <div className={styles.dayTemp}>20˚</div>
                    <div className={styles.dayName}>Среда</div>
                    <div className={styles.img}><GlobalSvgSelector id='sun'/></div>
                    <div className={styles.dayTime}>Time:<span>21:54</span></div>
                    <div className={styles.dayCity}>City:<span>Berlin</span></div>
                </div>
                <div className={styles.thisDayInfoItems}>
                    {items.map((item: Item) => (<ThisDayItem key={item.icon_id} item={item} />))}
                </div>
                <div className={styles.close}>
                    <GlobalSvgSelector id='close' />
                </div>
            </div>
        </>
    );
}

