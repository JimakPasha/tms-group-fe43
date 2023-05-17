import { FC } from 'react';
import './ActionsCard.scss';
import { MenuCard } from '../MenuCard/MenuCard';
import { FavoriteIcon, ThumbsDownIcon, ThumbsUpIcon } from '../../assets/icons';

export const ActionsCard: FC = () => {
    return (
        <div className='actions-card'>
            <div className='actions-card__box'>
                <div className='actions-card__count-box'>
                    <ThumbsUpIcon />
                    <span>20</span>
                </div>
                <div className='actions-card__count-box'>
                    <ThumbsDownIcon />
                    <span>3</span>
                </div>
            </div>
            <div className='actions-card__box'>
                <FavoriteIcon />
                <MenuCard />
            </div>
        </div>
    )
};
