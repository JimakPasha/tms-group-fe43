import { FC, useState } from 'react';
import menu from '../../assets/icons/menu.svg';
import { IconButton } from '../IconButton/IconButton';
import './MenuCard.scss';

export const MenuCard: FC = () => {
    const options = ['Edit', 'Delete'];
    const [open, setOpen] = useState(false);

    const handleToggleClick = () => {
        setOpen(!open);
    }

    const handleClickOption = (typeOption: string) => {
        setOpen(false);
        if (typeOption === 'Edit') console.log('edit');
        if (typeOption === 'Delete') console.log('Delete');
    }

    return (
        <div className='menu'>
          <IconButton onClick={handleToggleClick} >
            <img src={menu} alt="menu" />
          </IconButton>
          {open && (
            <ul className='menu__items'>
                {options.map((option) => (
                    <li className='menu__item' key={option}>
                        <button className='menu__item-btn' onClick={() => handleClickOption(option)}>
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
          )}
        </div>
    )
};
