import { FC, ReactNode } from 'react';
import './IconButton.scss';

interface IIconButton {
    onClick: () => void;
    children: ReactNode;
    withBackground?: boolean;
}

export const IconButton: FC<IIconButton> = ({onClick, children, withBackground = false}) => {
    return (
        <button className={`icon-button ${withBackground && 'withBackground'}`} onClick={onClick}>
            {children}
        </button>
    )
};
