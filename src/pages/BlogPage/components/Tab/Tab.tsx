import { FC } from 'react';
import './Tab.scss';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { isDarktheme } from '../../../../store/theme/selectors';
import { setActiveTabAction } from '../../../../store/tabs/actions';

interface ITab {
    id: number;
    title: string;
    isActive?: boolean;
    isDisabled?: boolean;
}

export const Tab: FC<ITab> = ({id, title, isActive = false, isDisabled = false}) => {
    const dispatch = useAppDispatch();
    const isDark = useAppSelector(isDarktheme);

    const buttonClass = `tab ${isDisabled && 'disabled'} ${isActive && 'active'} ${isDark && 'dark'}`;

    const handleClick = () => {
        dispatch(setActiveTabAction(id));
    }

    return <li className={buttonClass} onClick={handleClick}>{title}</li>
};
