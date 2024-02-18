import styles from './ThisDay.module.scss'
import sonne from './../../../../assets/icons/sonne.svg'
import { Weather } from '../../../../store/types/types';

export interface IThisDayProps {
  weather: Weather
}

export default function ThisDay({weather}: IThisDayProps) {
  return (
    <div className={styles.thisDay}>
      <div className={styles.topBlock}>
        <div className='topBlockWrapper'>
          <div className={styles.thisTemp}>{Math.ceil(weather.main.temp)}</div>
          <div className={styles.thisDayName}>Today</div>
        </div>
        <img src={sonne} alt="Sonne" className={styles.sonne} />
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.thisTime}>Time:<span>21:54</span></div>
        <div className={styles.thisCity}>City:<span>Berlin</span></div>
      </div>
    </div>
  );
}



