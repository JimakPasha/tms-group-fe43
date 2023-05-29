import { FC, useEffect } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Tabs } from './components/Tabs/Tabs';
import { PostList } from './components/PostList/PostList';
import { Spinner } from '../../components/Spinner/Spinner';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './BlogPage.scss';
import { getPostsAction } from '../../store/posts/actions';

export const BlogPage: FC = () => {
    const dispatch = useAppDispatch();
    const { posts, error, loading } = useAppSelector(state => state.posts);

    useEffect(() => {
        dispatch(getPostsAction());
    }, [dispatch]);

    return (
        <div className='blog'>
            <Typography content='Blog' type='H1' />
            {loading ? <Spinner /> : (
                <div className='blog__tabs'>
                    <Tabs />
                </div>
            )}
            {posts && <PostList cards={posts}/>}
            {error && <>{error}</>}
        </div>
    )
};
