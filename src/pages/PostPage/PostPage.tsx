import { FC } from 'react';
import thumbsDown from '../../assets/icons/thumbsDown.svg';
import thumbsUp from '../../assets/icons/thumbsUp.svg';
import favorites from '../../assets/icons/favorites.svg';
import arrowPrev from '../../assets/icons/arrowPrev.svg';
import arrowNext from '../../assets/icons/arrowNext.svg';
import { cards } from '../../mock/cards';
import { Typography } from '../../components/Typography/Typography';
import { IconButton } from '../../components/IconButton/IconButton';
import './PostPage.scss';

interface IPostPage {
}

export const PostPage: FC<IPostPage> = () => {
    const {title, image} = cards[0];

    return (
        <div className='post'>
            <Typography content={title} type='H1'/>
            <div className="post__img-box">
                <img src={image} alt={title} className="post__img" />
            </div>
            <div className='post__content'>
                <Typography 
                    content='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
                    type='textPrimary'
                />
                <Typography 
                    content='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
                    type='textPrimary'
                />
                <Typography 
                    content='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
                    type='textPrimary'
                />
                <Typography 
                    content='The excitement surrounding this exhibition delighted longtime fans of the expressive painter while inspiring a legion of new devotees—a trend matched by Neel’s strengthening position in the art market, especially in the past year. In May, Neel’s 1966 canvas Dr. Finger’s Waiting Room roused a flurry of bids from the United States, Asia, and Europe at Christie’s New York, where it ultimately sold for just over $3 million, breaking both its high estimate and the artist’s auction record. Just hours earlier at Sotheby’s New York, Neel’s double portrait Henry and Sally Hope (1977), depicting an art historian and his wife, sold for just under $1.6 million, notching her third-highest auction result.'
                    type='textPrimary'
                />
                <Typography 
                    content='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
                    type='textPrimary'
                />
                <div className="post__actions">
                    <div className="post__actions-likes">
                        <IconButton onClick={() => console.log('thumbsUp')} withBackground>
                            <img src={thumbsUp} alt="thumbsUp" />
                        </IconButton>
                        <IconButton onClick={() => console.log('thumbsDown')} withBackground>
                            <img src={thumbsDown} alt="thumbsDown" />
                        </IconButton>
                    </div>
                    <IconButton onClick={() => console.log('favorites')} withBackground>
                        <div className='post__actions-favorites'>
                            <img src={favorites} alt="favorites" /> Add to favorites
                        </div>
                    </IconButton>
                </div>
            </div>
            <div className="post__transitions">
                <IconButton onClick={() => console.log('arrowPrev')}>
                    <div className="post__transitions-box">
                        <img src={arrowPrev} alt="prev" />
                        <div className='post__transitions-texts prev'>
                            <div className='post__transitions-title'>Prev</div>
                            <div className='post__transitions-text'>10 Things to Know About Salvador Dalí</div>
                        </div>
                    </div>
                </IconButton>
                <IconButton onClick={() => console.log('arrowNext')}>
                    <div className="post__transitions-box">
                        <div className='post__transitions-texts next'>
                            <div className='post__transitions-title'>Next</div>
                            <div className='post__transitions-text'>8 Beautiful Villas Belonging to Artists You Need to See</div>
                        </div>
                        <img src={arrowNext} alt="next" />
                    </div>
                </IconButton>
            </div>
        </div>
    )
};
