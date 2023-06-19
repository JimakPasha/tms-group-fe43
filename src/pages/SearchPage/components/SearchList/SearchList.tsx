import { FC } from 'react';
import './SearchList.scss';
import { SearchCard } from '../SearchCard/SearchCard';
import { IPost } from '../../../../interfaces/IPost';

interface ISearchList {
    posts: IPost[];
}

export const SearchList: FC<ISearchList> = ({posts}) => {
    return (
        <ul className='search-list'>
            {posts.map(({id, date, image, title}) => (
                <SearchCard key={id} id={id} date={date} title={title} image={image} like={0} dislike={0} isFavorite={false} />
            ))}
        </ul>
    )
};
