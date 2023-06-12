import { FC } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { SearchList } from './components/SearchList/SearchList';
import { useAppSelector } from '../../store/hooks';
import { Spinner } from '../../components/Spinner/Spinner';

export const SearchPage: FC = () => {
    const { error, loading, posts, searchValue } = useAppSelector(state => state.posts);

    const renderPosts = () => {
        if (posts === null) {
            return <Typography content='Use search to find posts' type='H2'/>
        } else if (posts.length) {
            return (
                <>
                    <Typography content={`Search results ${searchValue}`} type='H1'/>
                    <SearchList posts={posts} />
                </>
            )
        } else {
            return <Typography content='No results' type='H1'/>
        }
    }

    return (
        <>
            {renderPosts()}
            {loading && <Spinner />}
            {error && <>{error}</>}
        </>
    )
};
