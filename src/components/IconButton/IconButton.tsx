import { FC, ReactNode } from 'react';
import './IconButton.scss';

interface IIconButton {
    onClick: () => void;
    children: ReactNode;
}

export const IconButton: FC<IIconButton> = ({onClick, children}) => {
    return (
        <button className='icon-button' onClick={onClick}>
            {children}
        </button>
    )
};
