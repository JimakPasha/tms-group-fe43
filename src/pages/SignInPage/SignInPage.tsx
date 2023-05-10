import { FC, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import './SignInPage.scss';

export const SignInPage: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword = (newValue: string) => {
        setPassword(newValue);
    }


    const handleSubmit = () => {
        console.log('форма отправляется на сервер');
    }

    return (
        <div className='sign-in'>
            <Typography content='Sign Ip' type='H1'/>
            <form className='sign-in__form'>
                <Input
                    title='Email'
                    placeholder='Your email'
                    value={email}
                    handleChange={handleChangeEmail}
                />
                <div>
                    <Input
                        title='Password'
                        placeholder='Your password'
                        value={password}
                        handleChange={handleChangePassword}
                    />
                    <a className='sign-in__form-forgot' href="https://example.com">
                        Forgot password?
                    </a>
                </div>
                <Button content='Sign Ip' onClick={handleSubmit} type='primary'/>
                <p className='sign-in__form-description'>
                    Don’t have an account? {' '}
                <a className='sign-in__form-link' href="https://example.com">
                    Sign Up
                </a>
                </p>
            </form>
        </div>
    )
};
