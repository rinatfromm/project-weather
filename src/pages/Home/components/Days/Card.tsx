import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { IDay } from './Days';
import styles from './Days.module.scss'


export interface ICardProps {
    day: IDay
}

export default function Card({ day }: ICardProps) {
    const { day: currentDay, day_info, icon_id, temp_day, temp_night, info } = day


    return (
        <div className={styles.card}>
            <div className={styles.day}>{currentDay}</div>
            <div className={styles.dayInfo}>{day_info}</div>
            <div className={styles.img}><GlobalSvgSelector id={icon_id} /></div>
            <div className={styles.dayTemp}>{temp_day}</div>
            <div className={styles.dayNight}>{temp_night}</div>
            <div className={styles.info}>{info}</div>
        </div>
    );
}
