import { FC, useState } from 'react';
import './UserInfo.scss';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';

interface IUserInfo {
    username: string;
}

export const UserInfo: FC<IUserInfo> = ({username}) => {
    const [isOpenUserModal, setIsOpenUserModal] = useState(false);

    const generateInitials = (username: string) => {
        return username.split(' ').map((n) => n[0]).join('').toUpperCase();
    }

    
    const handleOpenUserModal = () => setIsOpenUserModal(true);
    const handleCloseUserModal = () => setIsOpenUserModal(false);
    
    return (
        <>
            <div className='userinfo' onClick={handleOpenUserModal}>
                <div className='userinfo__initials'>{generateInitials(username)}</div>
                <div className='userinfo__name'>{username}</div>
            </div>
            {isOpenUserModal && <UserInfoModal onClose={handleCloseUserModal}/>}
        </>
    )
}
