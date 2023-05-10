import { FC } from 'react';
import './BlogPage.scss';
import { Typography } from '../../components/Typography/Typography';
import { Tabs } from '../../components/Tabs/Tabs';
import { CardList } from '../../components/CardList/CardList';

export const BlogPage: FC = () => {
    return (
        <div className='blog'>
            <Typography content='Blog' type='H1' />
            <div className='blog__tabs'>
                <Tabs />
            </div>
            <CardList />
        </div>
    )
};
