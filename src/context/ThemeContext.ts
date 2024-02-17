import { createContext } from "react";

interface IProps {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}


export const ThemeContext = createContext<IProps>({
    theme: Theme.LIGHT,
    changeTheme: () => { },
});