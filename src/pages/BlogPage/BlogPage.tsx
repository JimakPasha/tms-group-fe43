import { FC, useEffect, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Tabs } from './components/Tabs/Tabs';
import { CardList } from './components/CardList/CardList';
import { ICard } from '../../interfaces/ICard';
import { getCards } from '../../api/getCards';
import { Spinner } from '../../components/Spinner/Spinner';
import './BlogPage.scss';

export const BlogPage: FC = () => {
    const [cards, setCards] = useState<null | ICard[]>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCards = async () => {
            const data = await getCards();
            setCards(data);
            setIsLoading(false);
        }

        fetchCards();
    }, []);

    return (
        <div className='blog'>
            <Typography content='Blog' type='H1' />
            {isLoading ? <Spinner /> : (
                <div className='blog__tabs'>
                    <Tabs />
                </div>
            )}
            {cards && <CardList cards={cards}/>}
        </div>
    )
};
