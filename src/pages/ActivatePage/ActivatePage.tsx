import { FC, useEffect, useState } from 'react';
import './ActivatePage.scss';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '../../components/Spinner/Spinner';
import { postActivate } from '../../api/postActivate';

export const ActivatePage: FC= () => {
    const  { uid, token } = useParams();


    const [isLoading, setIsLoading] = useState(true);
    const [isActivate, setIsActivate] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsError(false);
        if (uid && token) {
            postActivate({ uid, token })
                .then(() => setIsActivate(true))
                .catch(() => setIsError(true))
                .finally(() => setIsLoading(false));
        }
    }, [token, uid]);

    const navigate = useNavigate();

    const handleClickToHome = () => {
        navigate('/posts');
    }

    const handleClickRefresh = () => {
        window.location.reload();
    }

    return (
        <>
            {isActivate && (
                <div className='activate-page'>
                    <Breadcrumbs path={[createBackToHomePath]} />
                    <Typography content='Success' type='H1'/>
                    <div className="activate-page__content">
                        <div>
                            <p className="activate-page__text">
                                Email confirmed.
                            </p>
                            <p className="activate-page__text">
                                Your registration is now completed
                            </p>
                        </div>
                        <Button content='Go to home' onClick={handleClickToHome} type='primary' />
                    </div>

                </div>
            )}
            {isLoading && <Spinner />}
            {isError && (
                <div className='activate-page'>
                    <Breadcrumbs path={[createBackToHomePath]} />
                    <Typography content='Activation failed' type='H1'/>
                    <div className="activate-page__content">
                        <p className="activate-page__text">
                            Ooops... an unknown error occurred
                        </p>
                        <div className="activate-page__btns">
                            <Button content='Go to home' onClick={handleClickToHome} type='primary' />
                            <Button content='Try again' onClick={handleClickRefresh} type='secondary' />
                        </div>
                    </div>
                 </div>
            )}
        </>
    )
};
