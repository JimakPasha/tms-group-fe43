import { FC } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { SearchList } from './components/SearchList/SearchList';

export const SearchPage: FC = () => {
    return (
        <>
            <Typography content='Search results ‘Astronauts’' type='H1'/>
            <SearchList />
        </>
    )
};
