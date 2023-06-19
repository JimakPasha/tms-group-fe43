import { FC, useState, ChangeEvent } from 'react';
import './FileInput.scss';
import { Button } from '../Button/Button';
import { CleanIcon } from '../../assets/icons';

interface IFileInput {
    handleChange: (files: FileList | null) => void;
    accept: string;
    title: string;
}

export const FileInput: FC<IFileInput> = ({ accept, title, handleChange }) => {
    const [fileName, setFileName] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files && files[0]) {
            let fileName = files[0].name;
            setFileName(fileName);
            handleChange(files);
        }
    }

    const handleRemoveFile = () => {
        handleChange(null);
        setFileName('');
    }

    return (
        <div className='file-input'>
            <div className='file-input__title'>{title}</div>
            <div className='file-input__content'>
                <div className='file-input__file-names'>
                    {fileName && <>{fileName} <CleanIcon onClick={handleRemoveFile}/></>}
                </div>
                <div>
                    <Button
                        content={<label htmlFor='file-input'>Upload new</label>}
                        isFullWidth={false}
                        type='secondary'
                    />
                    <input
                        className='file' 
                        id='file-input' 
                        onChange={handleInputChange} 
                        type="file"
                        accept={accept}
                    />
                </div>
            </div>

        </div>
    )
};
