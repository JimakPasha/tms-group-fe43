import { FC, useState } from 'react';
import burgerMenu from '../../assets/icons/burgerMenu.svg';
import cancel from '../../assets/icons/cancel.svg';
import './BurgerMenu.scss';


interface IBurgerMenu {
}

export const BurgerMenu: FC<IBurgerMenu> = () => {
    const [isOpen, setIsOpen] = useState(false); // let isOpen = false;

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <>
            <button className='burgerMenu' onClick={handleClick}>
                {isOpen ? (
                    <img src={cancel} alt="cancel" />
                ) : (
                    <img src={burgerMenu} alt="burgerMenu" />
                )}
            </button>
        </>
    )
};
