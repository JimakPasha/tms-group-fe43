import { FC } from 'react';
import './Tabs.scss';
import { Tab } from '../Tab/Tab';

export const Tabs: FC = () => {
    return (
        <ul className='tabs'>
            <Tab title='All' isActive />
            <Tab title='My favorites' />
            <Tab title='Popular' isDisabled />
        </ul>
    )
};
