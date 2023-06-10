import { FC, MouseEvent } from 'react';
import { IconButton } from '../../../IconButton/IconButton';
import { Typography } from '../../../Typography/Typography';
import { Button } from '../../../Button/Button';
import { useAppSelector } from '../../../../store/hooks';
import { CloseIcon } from '../../../../assets/icons';
import './UserInfoModal.scss';

interface IUserInfoModal {
    onClose: () => void;
}

export const UserInfoModal: FC<IUserInfoModal> = ({ onClose }) => {
    const { user } = useAppSelector(state => state.userInfo);

    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <div className='modal__close-icon'>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className="modal__title">
                    <Typography content='Your profile' type='H3'/>
                </div>
                <div className="modal__body">
                    <div className='modal__content'>
                        <div className='modal__content-title'>
                            Name: 
                            <span className='modal__content-user'>{user?.username}</span>
                        </div>
                        <div className='modal__content-title'>
                            Email: 
                            <span className='modal__content-user'>{user?.email}</span>
                        </div>
                    </div>
                    <div className="modal__button">
                        <Button onClick={onClose} type='primary' content='Ok' />
                    </div>
                </div>
            </div>
      </div>
    )
};
