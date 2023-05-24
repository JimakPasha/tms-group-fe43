import { FC } from 'react';
import './Tab.scss';
import { useAppSelector } from '../../../../store/hooks';
import { isDarktheme } from '../../../../store/theme/selectors';

interface ITab {
    title: string;
    isActive?: boolean;
    isDisabled?: boolean;
}

export const Tab: FC<ITab> = ({title, isActive = false, isDisabled = false}) => {
    const isDark = useAppSelector(isDarktheme);

    const buttonClass = `tab ${isDisabled && 'disabled'} ${isActive && 'active'} ${isDark && 'dark'}`;

    return <li className={buttonClass}>{title}</li>
};
