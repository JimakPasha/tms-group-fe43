import { FC } from 'react';
import { FullCard } from '../FullCard/FullCard';
import { ICard } from '../../../../interfaces/ICard';
import { MediumCard } from '../MediumCard/MediumCard';
import { SmallCard } from '../SmallCard/SmallCard';
import './PostList.scss';
import { useNavigate } from 'react-router-dom';

interface IPostList {
    cards: ICard[];
}

export const PostList: FC<IPostList> = ({cards}) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/posts/${id}`);
    }

    const fullCard = cards[0];
    const mediumCards = cards.slice(1, 5);
    const smallCards = cards.slice(5, 12);

    return (
        <div className='list'>
            <div>
                <div className='list__full-card'>
                    <FullCard id={fullCard.id} date={fullCard.date} image={fullCard.image} text={fullCard.text} title={fullCard.title} onClick={handleClick} />
                </div>
                <div className='list__medium-card'>
                    {mediumCards.map(({id, date, image, title}) => (
                        <MediumCard key={id} id={id} date={date} image={image} title={title} onClick={handleClick}/>
                    ))}
                </div>
            </div>
            <div className='list__small-card'>
                {smallCards.map(({id, date, image, title}) => (
                        <SmallCard key={id} id={id} date={date} image={image} title={title} onClick={handleClick}/>
                ))}
            </div>
        </div>
    )
};
