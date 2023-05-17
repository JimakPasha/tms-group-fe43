import { FC } from 'react';
import { useAppContext } from '../../../../contexts/AppContex';
import './Tab.scss';

interface ITab {
    title: string;
    isActive?: boolean;
    isDisabled?: boolean;
}

export const Tab: FC<ITab> = ({title, isActive = false, isDisabled = false}) => {
    const { isDarkTheme } = useAppContext();

    const buttonClass = `tab ${isDisabled && 'disabled'} ${isActive && 'active'} ${isDarkTheme() && 'dark'}`;

    return <li className={buttonClass}>{title}</li>
};
