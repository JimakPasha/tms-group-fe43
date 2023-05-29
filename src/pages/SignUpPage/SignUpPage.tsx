import { FC, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import './SignUpPage.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';
import { Link } from 'react-router-dom';
import { postNewUser } from '../../api/postNewUser';

export const SignUpPage: FC = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassowrd, setConfirmPassowrd] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPassowrdError] = useState('');


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
        let isValid = true;

        if (!username) {
            setUsernameError('Name is required');
            isValid = false;
        }
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (email.indexOf('@') === -1 && email.indexOf('.') === -1) {
            setEmailError('Email is invalid');
            isValid = false;
        }
        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        }

        if (!confirmPassowrd) {
            setConfirmPassowrdError('Confirm password is required');
            isValid = false;
        } else if (password !== confirmPassowrd) {
            setPasswordError('Password do not match');
            setConfirmPassowrdError('Password do not match');
            isValid = false;
        }

        return isValid;
    }

    const handleSubmit = () => {
        if (validateForm()) {
            alert('Ура!')
            // postNewUser({username, email, password});
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
                    errorMessage={usernameError}
                />
                <Input
                    title='Email'
                    placeholder='Your email'
                    value={email}
                    handleChange={handleChangeEmail}
                    errorMessage={emailError}
                />
                <Input
                    title='Password'
                    placeholder='Your password'
                    value={password}
                    handleChange={handleChangePassword}
                    errorMessage={passwordError}
                />
                <Input
                    title='Confirm password'
                    placeholder='Confirm password'
                    value={confirmPassowrd}
                    handleChange={handleChangeConfirmPassword}
                    errorMessage={confirmPasswordError}
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
