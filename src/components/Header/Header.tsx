import { FC, useState } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { UserInfo } from '../UserInfo/UserInfo';
import { IconButton } from '../IconButton/IconButton';
import './Header.scss';
import { CancelIcon, UserIcon, SearchIcon } from '../../assets/icons';
import { useNavigate } from 'react-router';

export const Header: FC = () => {
    const navigate = useNavigate();
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

      const handClickToSignIn = () => {
        navigate('/sign-in');
      }

    return (
        <header className='header'>
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
                    <IconButton onClick={handleToggleClick} type='header'>
                        {openSearch ? (
                            <CancelIcon />
                        ) : (
                            <SearchIcon />
                        )}
                    </IconButton>
                 </div>
                 {isLogged ? (
                     <UserInfo username='Artem Malkin'/>
                 ) : (
                    <IconButton onClick={handClickToSignIn} type='header'>
                        <UserIcon />
                    </IconButton>
                 )}
            </div>
        </header>
    )
};
