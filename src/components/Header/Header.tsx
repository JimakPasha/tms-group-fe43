import { FC, useState } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { UserInfo } from '../UserInfo/UserInfo';
import { IconButton } from '../IconButton/IconButton';
import search from '../../assets/icons/search.svg';
import cancel from '../../assets/icons/cancel.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
    const isLogged = false;
    const [openSearch, setOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleToggleClick = () => {
        setOpenSearch(!openSearch);
        setSearchValue('');
      };

      const handleChangeSearch = (newValue: string) => {
        setSearchValue(newValue);
      }

    return (
        <header className='header'>
            {isLogged && <Link to='/secret-information'>переход на секретную инфу</Link>}
            <BurgerMenu />
            {openSearch && (
                <div className='header__search-input'>
                    <input
                        type="text"
                        className='header__search-input'
                        placeholder='Search...'
                        value={searchValue}
                        onChange={(e) => handleChangeSearch(e.target.value)} 
                    />
                </div>
            )}
            <div className='header__box'>
                <div className='header__search'>
                    <IconButton onClick={handleToggleClick}>
                        {openSearch ? (
                            <img src={cancel} alt="cancel" />
                        ) : (
                            <img src={search} alt="search" />
                        )}
                    </IconButton>
                 </div>
                <UserInfo username='Artem Malkin'/>
            </div>
        </header>
    )
};
