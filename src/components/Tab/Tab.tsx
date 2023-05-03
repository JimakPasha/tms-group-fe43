import { FC } from 'react';
import './Tab.scss';

interface ITab {
    title: string;
    isActive?: boolean;
    isDisabled?: boolean;
}

export const Tab: FC<ITab> = ({title, isActive = false, isDisabled = false}) => {

    const buttonClass = `tab ${isDisabled && 'disabled'} ${isActive && 'active'}`;

    return <li className={buttonClass}>{title}</li>
};
