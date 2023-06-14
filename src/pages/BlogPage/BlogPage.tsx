import { FC, useEffect, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Tabs } from './components/Tabs/Tabs';
import { PostList } from './components/PostList/PostList';
import { Spinner } from '../../components/Spinner/Spinner';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './BlogPage.scss';
import { getPostsAction } from '../../store/posts/actions';
import { LIMIT_POSTS } from '../../constants/limit';
import { Pagination } from '../../components/Pagination/Pagination';

export const BlogPage: FC = () => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(12);
    const { posts, error, loading, countPosts } = useAppSelector(state => state.posts);

    useEffect(() => {
        dispatch(getPostsAction({offset: page * LIMIT_POSTS}));
    }, [dispatch, page]);

    const handlePageClick = (pageNumber: number) => setPage(pageNumber);

    const handleNextClick = () => setPage(page + 1);
    
    const handlePrevClick = () => setPage(page - 1);

    return (
        <div className='blog'>
            <Typography content='Blog' type='H1' />
            {loading ? <Spinner /> : (
                <div className='blog__tabs'>
                    <Tabs />
                </div>
            )}
            {posts && posts.length > 1 && <PostList cards={posts}/>}
            {error && <>{error}</>}

            <div className='blog__pagination'>
                <Pagination 
                    countElement={countPosts}
                    page={page}
                    handlePageClick={handlePageClick}
                    handleNextClick={handleNextClick}
                    handlePrevClick={handlePrevClick}
                />
            </div>
        </div>
    )
};

