import { FC } from 'react';
import './SearchCard.scss';
import { DateCard } from '../../../../components/DateCard/DateCard';
import { Typography } from '../../../../components/Typography/Typography';
import { ActionsCard } from '../../../../components/ActionsCard/ActionsCard';

interface ISearchCard {
    id: number;
    title: string;
    image: string;
    date: string;
}

export const SearchCard: FC<ISearchCard> = ({id, date, image, title}) => {
    return (
        <div className='search-card'>
            <div className="search-card__content">
                <div>
                    <div className="search-card__img-box">
                        <img className='search-card__img' src={image} alt={title} />
                    </div>
                </div>
                <div>
                    <DateCard date={date}/>
                    <Typography content={title} type='H3'/>
                </div>
            </div>
            <ActionsCard />
        </div>
    )
};
