import { FC } from 'react';
import './Footer.scss';

export const Footer: FC = () => {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <p className='footer__text'>©2023 Blogfolio</p>
                <p className='footer__text'>All rights reserved</p>
            </div>
        </footer>
    )
};
