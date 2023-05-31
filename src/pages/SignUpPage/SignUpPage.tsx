import { FC, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import './SignUpPage.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';
import { Link, useNavigate } from 'react-router-dom';
import { postNewUser } from '../../api/postNewUser';
import { useAppDispatch } from '../../store/hooks';
import { setConfirmEmailAction } from '../../store/confirmEmail/actions';

interface IError {
    username: string | string[];
    email: string | string[];
    password: string | string[];
    confirmPassword: string | string[];
}

export const SignUpPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassowrd] = useState('');

    const [errors, setErrors] = useState<IError>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });


    const handleChangeName = (newValue: string) => {
        setUserName(newValue);
    }

    const handleChangeEmail = (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword = (newValue: string) => {
        setPassword(newValue);
    }

    const handleChangeConfirmPassword = (newValue: string) => {
        setConfirmPassowrd(newValue);
    }

    const validateForm = () => {
        const newErrors: IError = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        if (!username) {
            newErrors.username = 'Name is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }  else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
          }
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is required';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            newErrors.password = 'Passwords do not match';
        }
        
        let isValid = Object.values(newErrors).every(error => error === '');
        if (isValid) {
            return true;
        } else {
            setErrors(newErrors);
            return false;
        }
    }

    const handleSubmit = () => {
        if (validateForm()) {
            postNewUser({username, email, password}).then(() => {
                dispatch(setConfirmEmailAction(email));
                navigate('/confirm-registration');
            }).catch((error) => setErrors(prev => ({...prev, ...error.response.data})));
        }
    }

    return (
        <div className='sign-up'>
            <Breadcrumbs path={[createBackToHomePath]} />
            <Typography content='Sign Up' type='H1'/>
            <form className='sign-up__form'>
                <Input
                    title='Name'
                    placeholder='Your name'
                    value={username}
                    handleChange={handleChangeName}
                    errorMessage={errors.username}
                />
                <Input
                    title='Email'
                    placeholder='Your email'
                    value={email}
                    handleChange={handleChangeEmail}
                    errorMessage={errors.email}
                />
                <Input
                    title='Password'
                    placeholder='Your password'
                    value={password}
                    handleChange={handleChangePassword}
                    errorMessage={errors.password}
                />
                <Input
                    title='Confirm password'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    handleChange={handleChangeConfirmPassword}
                    errorMessage={errors.confirmPassword}
                />
                <Button content='Sign Up' onClick={handleSubmit} type='primary' />
                <p className='sign-up__form-description'>
                    Already have an account? {' '}
                <Link to='/sign-in' className='sign-up__form-link'>
                    Sign In
                </Link>
                </p>
            </form>
        </div>
    )
};
