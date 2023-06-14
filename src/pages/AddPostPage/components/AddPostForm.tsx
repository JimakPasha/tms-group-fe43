import { FC, useState } from 'react';
import { Input } from '../../../components/Input/Input';
import './AddPostForm.scss';
import { Textarea } from '../../../components/Textarea/Textarea';
import { Button } from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

interface IError {
    title: string;
    lesson: string;
    image: string;
    description: string;
    text: string;
}

export const AddPostForm: FC = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [lesson, setLesson] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [text, setText] = useState('');

    const [errors, setErrors] = useState<IError>({
        title: '',
        lesson: '',
        image: '',
        description: '',
        text: '',
    });

    const handleChangeTitle = (newValue: string) => {
        setErrors(errors => ({...errors, title: ''}));
        setTitle(newValue);
    }

    const handleChangeLesson = (newValue: string) => {
        setErrors(errors => ({...errors, lesson: ''}));
        setLesson(newValue);
    }

    const handleChangeDescription = (newValue: string) => {
        setErrors(errors => ({...errors, description: ''}));
        setDescription(newValue);
    }

    const handleChangeText = (newValue: string) => {
        setErrors(errors => ({...errors, text: ''}));
        setText(newValue);
    }

    const handleCancel = () => {
        navigate('/posts');
    }

    const validateForm = () => {
        const newErrors: IError = {
            title: '',
            lesson: '',
            image: '',
            description: '',
            text: '',
        }

        if (!title) {
            newErrors.title = 'Title is required';
        }

        if (!lesson) {
            newErrors.lesson = 'Lesson is required';
        }

        if (!description) {
            newErrors.description = 'Description is required';
        }

        if (!text) {
            newErrors.text = 'Text is required';
        }
        
        let isValid = Object.values(newErrors).every(error => error === '');

        if (isValid) {
            return true;
        } else {
            setErrors(newErrors);
            return false;
        }
    }

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('ok');
            // делаем запрос
        }
    }

    return (
        <form className='add-post-form'>
            <Input
                title='Title'
                placeholder='Add your title'
                value={title}
                handleChange={handleChangeTitle}
                errorMessage={errors.title}
            />
            <Input
                title='Lesson'
                placeholder='Add your lesson number'
                value={lesson}
                handleChange={handleChangeLesson}
                errorMessage={errors.lesson}
            />

            <Textarea 
                title='Description'
                placeholder='Add your description'
                value={description}
                handleChange={handleChangeDescription}
                errorMessage={errors.description}
                size='s'
            />
            <Textarea 
                title='Text'
                placeholder='Add your text'
                value={text}
                handleChange={handleChangeText}
                errorMessage={errors.text}
                size='l'
            />
            
            <div className='add-post-form__btns'>
                <Button content='Cancel' onClick={handleCancel} type='secondary' isFullWidth={false} /> 
                <Button content='Add post' onClick={handleSubmit} type='primary' isDisabled={false} isFullWidth={false} /> 
            </div>
        </form>
    )
};
