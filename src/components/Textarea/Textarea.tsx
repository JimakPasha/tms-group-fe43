import { FC } from 'react';
import './Textarea.scss';

interface ITextarea {
    value: string;
    handleChange: (newValue: string) => void;
    title: string;
    placeholder?: string;
    errorMessage?: string | string[];
    size?: 's' | 'm' | 'l';
}

export const Textarea: FC<ITextarea> = ({value, handleChange, title, placeholder, errorMessage, size = 's'}) => {

    const generatErrorMessage = (message: string | string[]) => typeof message === 'string' ? message : message.join(' ');

    return (
        <div className='textarea-wrapper'>
            <label className='label' htmlFor="textarea-text">{title}</label>
            <textarea
                className={`textarea ${errorMessage && 'error'} ${size}`}
                placeholder={placeholder}
                id='textarea-text'
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
            {errorMessage && <div className='errorMesage'>{generatErrorMessage(errorMessage)}</div>}
        </div>
    )
};
