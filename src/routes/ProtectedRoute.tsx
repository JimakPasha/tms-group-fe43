import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute: FC = () => {
    const isLogged = true;

    if (!isLogged) {
        return <Navigate replace to={'./posts'} />
    }

    return <Outlet />;
};
