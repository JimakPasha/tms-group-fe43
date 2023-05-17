import { FC, ReactNode } from 'react';
import './Container.scss';
import { useAppContext } from '../../contexts/AppContex';

interface IContainer {
    children: ReactNode;
}

export const Container: FC<IContainer> = ({children}) => {
    const { isDarkTheme } = useAppContext();

    return (
        <div className={`container ${isDarkTheme() ? 'dark' : 'light'}`}>
            {children}
        </div>
    )
};
