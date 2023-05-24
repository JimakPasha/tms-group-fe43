import { FC, useState } from 'react';
import burgerMenu from '../../assets/icons/burgerMenu.svg';
import cancel from '../../assets/icons/cancel.svg';
import { LightIcon, DarkIcon } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';
import './BurgerMenu.scss';
import { Button } from '../Button/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { isDarktheme } from '../../store/theme/selectors';
import { toggleThemeAction } from '../../store/theme/actions';

export const BurgerMenu: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const isDark = useAppSelector(isDarktheme);

    const options = [
        {id: 1, name: 'Home', url: './posts'},
        {id: 2, name: 'Add post', url: ''},
    ] 

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    }

    const handleGoTo = (url: string) => {
        navigate(url);
        setIsOpen(false);
    }

    return (
        <div className='burgerMenu'>
            <button className='burgerMenu__btn' onClick={handleClick}>
                {isOpen ? (
                    <img src={cancel} alt="cancel" />
                ) : (
                    <img src={burgerMenu} alt="burgerMenu" />
                )}
            </button>
            <div className={`burgerMenu__content ${isOpen && 'open'}`}>
                <nav className="burgerMenu__nav">
                    {options.map(({id, name, url}) => (
                        <li key={id} className='burgerMenu__nav-item'>
                            <button className='burgerMenu__nav-btn' onClick={() => handleGoTo(url)}>
                                {name}
                            </button>
                        </li>
                    ))}
                </nav>
                <div>
                    <div className="burgerMenu__theme-box">
                        <button
                            className="burgerMenu__theme-btn"
                            onClick={() => dispatch(toggleThemeAction())}
                            disabled={isDark}
                        >
                            <DarkIcon />
                        </button>
                        <button
                            className="burgerMenu__theme-btn"
                            onClick={() => dispatch(toggleThemeAction())}
                            disabled={!isDark}
                        >
                            <LightIcon />
                        </button>
                    </div>
                    <Button
                        content='Log Out'
                        onClick={() => console.log('Log Out')}
                        type='secondary'
                    />
                </div>
            </div>
        </div>
    )
};
