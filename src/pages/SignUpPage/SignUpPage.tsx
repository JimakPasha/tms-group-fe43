import { FC, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import './SignUpPage.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';

export const SignUpPage: FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassowrd, setConfirmPassowrd] = useState('');

    const handleChangeName = (newValue: string) => {
        setName(newValue);
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

    const handleSubmit = () => {
        console.log('форма отправляется на сервер');
    }

    return (
        <div className='sign-up'>
            <Breadcrumbs path={[createBackToHomePath]} />
            <Typography content='Sign Up' type='H1'/>
            <form className='sign-up__form'>
                <Input
                    title='Name'
                    placeholder='Your name'
                    value={name}
                    handleChange={handleChangeName}
                />
                <Input
                    title='Email'
                    placeholder='Your email'
                    value={email}
                    handleChange={handleChangeEmail}
                />
                <Input
                    title='Password'
                    placeholder='Your password'
                    value={password}
                    handleChange={handleChangePassword}
                />
                <Input
                    title='Confirm password'
                    placeholder='Confirm password'
                    value={confirmPassowrd}
                    handleChange={handleChangeConfirmPassword}
                />
                <Button content='Sign Up' onClick={handleSubmit} type='primary'/>
                <p className='sign-up__form-description'>
                    Already have an account? {' '}
                <a className='sign-up__form-link' href="https://example.com">
                    Sign In
                </a>
                </p>
            </form>
        </div>
    )
};
