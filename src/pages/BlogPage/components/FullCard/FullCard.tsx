import { FC } from 'react';
import { Typography } from '../../../../components/Typography/Typography';
import './FullCard.scss';
import { DateCard } from '../../../../components/DateCard/DateCard';
import { ActionsCard } from '../../../../components/ActionsCard/ActionsCard';

interface IFullCard {
    id: number;
    text: string;
    title: string;
    image: string;
    date: string;
    onClick: (id: number) => void;
    like: number;
    dislike: number;
}

export const FullCard: FC<IFullCard> = ({id, text, title, image, date, onClick, like, dislike}) => {

    return (
        <div className='full-card'>
            <div className='full-card__content'>
                <div>
                    <DateCard date={date} />
                    <button className='full-card__btn' onClick={() => onClick(id)}>
                        <Typography content={title} type='H2'/>
                    </button>
                    <p className='full-card__text'>{text}</p>
                    <div></div>
                </div>
                <div>
                    <div className='full-card__img-box'>
                        <img className='full-card__img' src={image} alt={title} />
                    </div>
                </div>
            </div>
            <ActionsCard id={id} dislike={dislike} like={like}/>
        </div>
    )
};
