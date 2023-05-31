import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IProtectedRoute {
    access: boolean;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ access }) => {

    if (!access) {
        return <Navigate replace to={'./posts'} />
    }

    return <Outlet />;
};
