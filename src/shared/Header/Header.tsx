import React from 'react';
import styles from './Header.module.scss'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select'

export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
    const options = [
        { value: 'city-1', label: 'Berlin' },
        { value: 'city-2', label: 'Salzgitter' },
        { value: 'city-3', label: 'Hamburg' }
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71,147,255,0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        })
    }

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <GlobalSvgSelector id='header-logo' />
                </div>
                <div className={styles.title}>React weather</div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.change_theme}>
                    <GlobalSvgSelector id='change-theme' />
                </div>
                <Select defaultValue={options[0]} styles={colourStyles} options={options} />
            </div>
        </header>
    );
}

