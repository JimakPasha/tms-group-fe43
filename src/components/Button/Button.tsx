import { FC } from 'react';
import { useAppContext } from '../../contexts/AppContex';
import './Button.scss';

interface IButton {
    isDisabled?: boolean;
    type: 'primary' | 'secondary' | 'secondary2';
    content: string;
    onClick: () => void;
}

export const Button: FC<IButton> = ({content, isDisabled  = false, onClick, type}) => {
    const { isDarkTheme } = useAppContext();

    const buttonClass = `button button--${type} ${isDisabled ? 'disabled' : 'active'} ${isDarkTheme() && 'dark'}`

    return (
        <button
          className={buttonClass}
          onClick={onClick}
          disabled={isDisabled}
          type='button'
        >
            {content}
        </button>
    )
}
