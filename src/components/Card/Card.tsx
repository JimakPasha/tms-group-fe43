import { FC } from 'react';
import { FullCard } from '../FullCard/FullCard';
import { MediumCard } from '../MediumCard/MediumCard';
import { SmallCard } from '../SmallCard/SmallCard';
import './Card.scss';

interface ICard {
    type: 'full' | 'medium' | 'small';
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    author: string;
}

export const Card: FC<ICard> = ({type, id, image, text, title, date}) => {

    const renderCard = () => {
        if (type === 'full') {
            return <FullCard id={id} title={title} date={date} image={image} text={text}/>
        }
        if (type === 'medium') {
            return <MediumCard id={id} title={title} date={date} image={image}/>
        }
        if (type === 'small') {
            return <SmallCard id={id} title={title} date={date} image={image}/>
        }
    }

    return (
        <>
            {renderCard()}
        </>
    )
};
