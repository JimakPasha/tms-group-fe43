import { FC } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import './RegistrationConfirm.scss';

export const RegistrationConfirm: FC = () => {

    const handleClickGoHome = () => {
        console.log('handleClickGoHome');
        
    }

    return (
        <div className='registration-confrim'>
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
