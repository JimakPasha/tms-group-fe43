import { FC } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import './RegistrationConfirmPage.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';
import { useNavigate } from 'react-router-dom';

export const RegistrationConfirmPage: FC = () => {
    const navigate = useNavigate();

    const handleClickGoHome = () => {
        navigate('/posts');
    }

    return (
        <div className='registration-confrim'>
            <Breadcrumbs path={[createBackToHomePath]} />
            <Typography content='Registration Confirmation' type='H1'/>
            <div className='registration-confrim__content'>
                <div>
                    <p className='registration-confrim__text'>
                        Please activate your account with the activation link in the email {' '}
                        <span className='registration-confrim__email'>example@gmail.com.</span> 
                    </p>
                    <p className='registration-confrim__text'>
                        Please, check your email
                    </p>
                </div>
                <Button content='Go to home' onClick={handleClickGoHome} type='primary'/>
            </div>
        </div>
    )
};
