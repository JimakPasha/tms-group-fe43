import { FC } from 'react';
import './Textarea.scss';

interface ITextarea {
    value: string;
    handleChange: (newValue: string) => void;
    title: string;
    placeholder?: string;
}

export const Textarea: FC<ITextarea> = ({value, handleChange, title, placeholder}) => {
    return (
        <div className='textarea-wrapper'>
            <label className='label' htmlFor="textarea-text">{title}</label>
            <textarea
                className='textarea'
                placeholder={placeholder}
                id='textarea-text'
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
};
