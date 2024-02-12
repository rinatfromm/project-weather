import styles from './ThisDay.module.scss'
import sonne from './../../../../assets/icons/sonne.svg'

export interface IThisDayProps {
}

export default function ThisDay(props: IThisDayProps) {
  return (
    <div className={styles.thisDay}>
      <div className={styles.topBlock}>
        <div className='topBlockWrapper'>
          <div className={styles.thisTemp}>20˚</div>
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



