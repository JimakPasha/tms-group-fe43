import { FC } from 'react';
import './ActionsCard.scss';
import { MenuCard } from '../MenuCard/MenuCard';
import { FavoriteIcon, ThumbsDownIcon, ThumbsUpIcon } from '../../assets/icons';
import { useAppDispatch } from '../../store/hooks';
import { setDislikeAction, setFavoriteAction, setLikeAction, setToggleFavoriteAction } from '../../store/posts/actions';
import { IconButton } from '../IconButton/IconButton';


interface IActionsCard {
    id: number;
    like: number;
    dislike: number;
    isFavorite: boolean;
}

export const ActionsCard: FC<IActionsCard> = ({ id, like, dislike, isFavorite }) => {
    const dispatch = useAppDispatch();

    const handleLike = () => {
        dispatch(setLikeAction(id));
    }

    const handleDislike = () => {
        dispatch(setDislikeAction(id));
    }


    const handleToggleFavorites = () => {
        dispatch(setToggleFavoriteAction(id));
        dispatch(setFavoriteAction());
    }

    return (
        <div className='actions-card'>
            <div className='actions-card__box'>
                <IconButton onClick={handleLike}>
                    <div className='actions-card__count-box'>
                        <ThumbsUpIcon />
                        <span>{like}</span>
                    </div>
                </IconButton>
                <IconButton onClick={handleDislike}>
                    <div className='actions-card__count-box'>
                        <ThumbsDownIcon />
                        <span>{dislike}</span>
                    </div>
                </IconButton>
            </div>
            <div className='actions-card__box'>
                <IconButton onClick={handleToggleFavorites}>
                    <FavoriteIcon className={isFavorite ? 'favorite' : 'noFavorite'} />
                </IconButton>
                <MenuCard />
            </div>
        </div>
    )
};
