import { FC } from 'react';
import './MediumCard.scss';
import { DateCard } from '../../../../components/DateCard/DateCard';
import { Typography } from '../../../../components/Typography/Typography';
import { ActionsCard } from '../../../../components/ActionsCard/ActionsCard';

interface IMediumCard {
    id: number;
    title: string;
    image: string;
    date: string;
    onClick: (id: number) => void;
}

export const MediumCard: FC<IMediumCard> = ({id, date, image, title, onClick}) => {
    return (
        <div className='medium-card'>
            <div className='medium-card__img-box'>
                <img className='medium-card__img' src={image} alt={title} />
            </div>
            <DateCard date={date} />
            <button className='medium-card__btn' onClick={() => onClick(id)}>
                <Typography content={title} type='H3'/>
            </button>
            <div className='medium-card__actions'>
                <ActionsCard />
            </div>
        </div>
    )
};
