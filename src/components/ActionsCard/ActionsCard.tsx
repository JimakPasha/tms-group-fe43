import { FC } from 'react';
import thumbsDown from '../../assets/icons/thumbsDown.svg';
import thumbsUp from '../../assets/icons/thumbsUp.svg';
import favorites from '../../assets/icons/favorites.svg';
import './ActionsCard.scss';
import { MenuCard } from '../MenuCard/MenuCard';

export const ActionsCard: FC = () => {
    return (
        <div className='actions-card'>
            <div className='actions-card__box'>
                <div className='actions-card__count-box'>
                    <img src={thumbsUp} alt="thumbsUp" />
                    <span>20</span>
                </div>
                <div className='actions-card__count-box'>
                    <img src={thumbsDown} alt="thumbsDown" />
                    <span>3</span>
                </div>
            </div>
            <div className='actions-card__box'>
                <img src={favorites} alt="favorites" />
                <MenuCard />
            </div>
        </div>
    )
};
