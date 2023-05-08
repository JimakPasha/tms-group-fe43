import { FC } from 'react';
import { Typography } from '../Typography/Typography';
import './FullCard.scss';
import { DateCard } from '../DateCard/DateCard';
import { ActionsCard } from '../ActionsCard/ActionsCard';

interface IFullCard {
    id: number;
    text: string;
    title: string;
    image: string;
    date: string;
}

export const FullCard: FC<IFullCard> = ({id, text, title, image, date}) => {

    return (
        <div className='full-card'>
            <div className='full-card__content'>
                <div>
                    <DateCard date={date} />
                    <Typography content={title} type='H2' isLink/>
                    <p className='full-card__text'>{text}</p>
                    <div></div>
                </div>
                <div>
                    <div className='full-card__img-box'>
                        <img className='full-card__img' src={image} alt={title} />
                    </div>
                </div>
            </div>
            <ActionsCard />
        </div>
    )
};
