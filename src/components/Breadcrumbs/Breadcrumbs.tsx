import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';
import { cutText } from '../../utils/cutText';

interface IPath {
    name: string;
    url: string;
    isActive: boolean;
}

interface IBreadcrumbs {
    path: IPath[];
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({ path }) => (
    <div className='breadcrumbs'>
        {path.map(({name, url, isActive}) => {
            const cutName = cutText(name, 40);
            return (
                <>
                    {isActive ? (
                        <Link key={url} to={url} className='breadcrumbs__link'>{cutName}</Link>
                    ) : (
                        <span key={url} className='breadcrumbs__text'>{cutName}</span>
                    )}
                </>
            )
        })}
    </div>
)
