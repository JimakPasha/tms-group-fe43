import { FC } from 'react';
import './Tabs.scss';
import { Tab } from '../Tab/Tab';
import { useAppSelector } from '../../../../store/hooks';

export const Tabs: FC = () => {
    const { tabs } = useAppSelector(state => state.tabs);

    return (
        <ul className='tabs'>
            {tabs.map(({id, title, isActive, isDisabled}) => (
                    <Tab key={id} id={id} title={title} isActive={isActive} isDisabled={isDisabled} />
            ))}
        </ul>
    )
};
