import { FC } from 'react';
import './AddPostPage.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { Typography } from '../../components/Typography/Typography';
import { AddPostForm } from './components/AddPostForm';


export const AddPostPage: FC = () => {

    const breadcrumbsPaths = [
            {name: 'Home', url: '/posts', isActive: true},
            {name: 'Add post', url: '', isActive: false},
    ]

    return (
        <div className='add-post'>
            <Breadcrumbs path={breadcrumbsPaths} />
            <Typography content='Add post' type='H1' />
            <AddPostForm />
        </div>
    )
};
