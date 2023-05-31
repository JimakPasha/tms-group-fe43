import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BlogPage } from '../pages/BlogPage/BlogPage';
import { PostPage } from '../pages/PostPage/PostPage';
import { SearchPage } from '../pages/SearchPage/SearchPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { RegistrationConfirmPage } from '../pages/RegistrationConfirmPage/RegistrationConfirmPage';
import { ActivatePage } from '../pages/ActivatePage/ActivatePage';
import { useAppSelector } from '../store/hooks';
import { ProtectedRoute } from './ProtectedRoute';

export const Router: FC = () => {

    const { confirmEmail } = useAppSelector(state => state.confirmEmail);

    return (
        <Routes>
        <Route path='/posts' element={<BlogPage />}/>
        <Route path='/posts/:id' element={<PostPage />}/>
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/sign-in' element={<SignInPage />}/>
        <Route path='/sign-up' element={<SignUpPage />}/>
        <Route path='/activate/:uid/:token' element={<ActivatePage />}/>

        <Route element={<ProtectedRoute access={!!confirmEmail} />}>
            <Route path='/confirm-registration' element={<RegistrationConfirmPage />}/>
        </Route>

        <Route path='*' element={<>Такой страницы не существует</>}/>
    </Routes>
    )
}

