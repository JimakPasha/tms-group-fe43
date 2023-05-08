import { FC } from 'react';
import './DateCard.scss';

interface IDateCard {
    date: string;
}

export const DateCard: FC<IDateCard> = ({date}) => {
    return (
        <div className='date'>{date}</div>
    )
};
