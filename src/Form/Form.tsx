import { FC, useState } from 'react';
import { Input } from '../Input/Input';
import './Form.scss';
import { Textarea } from '../Textarea/Textarea';

export const Form: FC = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [text, setText] = useState('');

    const handleChangeName = (newName: string) => {
        setName(newName);
    }

    const handleChangeLastName = (newName: string) => {
        setLastName(newName);
    }

    const handleChangeAge = (newName: string) => {
        setAge(newName);
    }

    const handleChangeText = (newName: string) => {
        setText(newName);
    }

    return (
        <form>
            <Input
                title='Title'
                placeholder='some placeholder'
                value={name}
                handleChange={handleChangeName}
            />
            <Input
                title='Title2'
                placeholder='some placeholder'
                value={lastName}
                isDisabled
                handleChange={handleChangeLastName}
            />
            <Input
                title='Title'
                placeholder='some placeholder'
                value={age}
                errorMessage='У тебя ошибка!'
                handleChange={handleChangeAge}
            />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Textarea
                title='Title'
                value={text}
                placeholder='placeholder'
                handleChange={handleChangeText}
            />
        </form>
    )
};
