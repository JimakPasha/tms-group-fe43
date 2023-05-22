import { FC } from 'react';
import './SuccessPage.scss';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';
import { useNavigate } from 'react-router-dom';

export const SuccessPage: FC= () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('./posts');
    }

    return (
        <div className='success-page'>
            <Breadcrumbs path={[createBackToHomePath]} />
            <Typography content='Success' type='H1'/>
            <div className="success-page__content">
                <div>
                    <p className="success-page__text">
                        Email confirmed.
                    </p>
                    <p className="success-page__text">
                        Your registration is now completed
                    </p>
                </div>
                <Button content='Go to home' onClick={handleClick} type='primary' />
            </div>
        </div>
    )
};
