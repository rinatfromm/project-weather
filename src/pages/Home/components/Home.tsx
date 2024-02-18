import { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import Days from './Days/Days';
import styles from './Home.module.scss'
import ThisDay from './ThisDay/ThisDay';
import ThisDayInfo from './ThisDayInfo/ThisDayInfo';
import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../../store/selectors';

export interface IHomeProps {
}

export default function Home(props: IHomeProps) {

const dispatch = useCustomDispatch()

const {weather} = useCustomSelector(selectCurrentWeatherData)

useEffect(()=>{
  dispatch(fetchCurrentWeather('Berlin'))
},[])

  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
}



