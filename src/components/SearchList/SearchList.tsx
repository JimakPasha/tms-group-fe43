import { FC } from 'react';
import { cards } from '../../mock/cards';
import { SearchCard } from '../SearchCard/SearchCard';
import './SearchList.scss';

interface ISearchList {
}

export const SearchList: FC<ISearchList> = () => {
    return (
        <ul className='search-list'>
            {cards.map(({id, date, image, title}) => (
                <SearchCard key={id} id={id} date={date} title={title} image={image} />
            ))}
        </ul>
    )
};
