import { FC } from 'react';
import './SmallCard.scss';
import { DateCard } from '../../../../components/DateCard/DateCard';
import { Typography } from '../../../../components/Typography/Typography';
import { ActionsCard } from '../../../../components/ActionsCard/ActionsCard';

interface ISmallCard {
    id: number;
    title: string;
    image: string;
    date: string;
}

export const SmallCard: FC<ISmallCard> = ({id, date, image, title}) => {
    return (
        <div className='small-card'>
            <div className='small-card__content'>
                <div>
                    <DateCard date={date} />
                    <Typography content={title} type='H3' isLink/>
                </div>
                <div>
                    <div className='small-card__img-box'>
                        <img className='small-card__img' src={image} alt={title} />
                    </div>
                </div>
            </div>
            <ActionsCard />
        </div>
    )
};
