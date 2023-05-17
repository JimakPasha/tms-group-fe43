import { FC, useEffect, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Tabs } from './components/Tabs/Tabs';
import { PostList } from './components/PostList/PostList';
import { ICard } from '../../interfaces/ICard';
import { getPosts } from '../../api/getPosts';
import { Spinner } from '../../components/Spinner/Spinner';
import './BlogPage.scss';

export const BlogPage: FC = () => {
    const [cards, setCards] = useState<null | ICard[]>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPosts().then((data) => {
            setCards(data);
            setIsLoading(false);
        })
    }, []);

    return (
        <div className='blog'>
            <Typography content='Blog' type='H1' />
            {isLoading ? <Spinner /> : (
                <div className='blog__tabs'>
                    <Tabs />
                </div>
            )}
            {cards && <PostList cards={cards}/>}
        </div>
    )
};
