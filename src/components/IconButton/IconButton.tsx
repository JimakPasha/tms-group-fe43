import { FC, ReactNode } from 'react';
import './IconButton.scss';

interface IIconButton {
    onClick: () => void;
    children: ReactNode;
    withBackground?: boolean;
    type?: 'header' | 'default';
}

export const IconButton: FC<IIconButton> = ({onClick, children, withBackground = false, type = 'default'}) => {
    const className = `icon-button ${withBackground && 'withBackground'} ${type === 'header' && 'headerType'}`;

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
};
