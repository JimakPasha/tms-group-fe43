import { FC } from 'react';
import { cards } from '../../../../mock/cards';
import './SearchList.scss';
import { SearchCard } from '../SearchCard/SearchCard';

interface ISearchList {
}

export const SearchList: FC<ISearchList> = () => {
    return (
        <ul className='search-list'>
            {cards.map(({id, date, image, title}) => (
                <SearchCard key={id} id={id} date={date} title={title} image={image} like={0} dislike={0}/>
            ))}
        </ul>
    )
};
