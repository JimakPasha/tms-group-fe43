import { FC, useEffect, useState } from 'react';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { UserInfo } from './components/UserInfo/UserInfo';
import { IconButton } from '../IconButton/IconButton';
import './Header.scss';
import { CancelIcon, UserIcon, SearchIcon } from '../../assets/icons';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUserInfoAction } from '../../store/userInfo/actions';
import { getPostsAction, resetPostsAction } from '../../store/posts/actions';
import { useDebounce } from '../../hooks/useDebounce';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    const [openSearch, setOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearchValue = useDebounce(searchValue, 500);

    const { isLogged } = useAppSelector(state => state.auth);
    const { error, loading, user } = useAppSelector(state => state.userInfo);

    useEffect(() => {
        if (location.pathname !== '/search') {
            setOpenSearch(false);
        }
    }, [location]);

    useEffect(() => {
        if (debouncedSearchValue) {
            dispatch(getPostsAction({searchValue: debouncedSearchValue}));
          } else {
            dispatch(resetPostsAction());
          }

    }, [debouncedSearchValue, dispatch]);

    useEffect(() => {
        if (openSearch) {
            navigate('/search');
            dispatch(resetPostsAction());
        }
    }, [openSearch, navigate, dispatch]);

    useEffect(() => {
        if (isLogged) {
            dispatch(getUserInfoAction());
        }
    }, [isLogged, dispatch]);

    const handleToggleClick = () => {
        setOpenSearch(!openSearch);
        setSearchValue('');
        if (openSearch) {
            navigate('posts')
        }
      };

    const handleChangeSearch = (searchValue: string) => {
      setSearchValue(searchValue);
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
                 {user && <UserInfo username={user.username} />}
                 {!user && !loading && (
                    <IconButton onClick={handClickToSignIn} type='header'>
                        <UserIcon />
                    </IconButton>
                 )}
                {error && <>error</>}
            </div>
        </header>
    )
};
