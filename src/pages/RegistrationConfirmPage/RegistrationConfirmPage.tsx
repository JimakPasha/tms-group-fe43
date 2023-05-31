import { FC, useEffect } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import './RegistrationConfirmPage.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetConfirmEmailAction } from '../../store/confirmEmail/actions';

export const RegistrationConfirmPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(resetConfirmEmailAction());
        }
    }, [dispatch]);

    const { confirmEmail } = useAppSelector(state => state.confirmEmail);

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
                        <span className='registration-confrim__email'>{confirmEmail}</span> 
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
