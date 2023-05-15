import { FC, ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { useAppContext } from '../../contexts/AppContex';
import './PageTemplate.scss';

interface IPageTemplate {
    children?: ReactNode
}

export const PageTemplate: FC<IPageTemplate> = ({children}) => {
    const { toggleTheme, isDarkTheme } = useAppContext();

    const handleToggleTheme = () => {
        toggleTheme();
    }

    return (
        <div className={isDarkTheme() ? 'dark' : 'light'}>
            <Header />
            <Container>
                {children}
                <Footer />
            </Container>
            <button
                onClick={handleToggleTheme}
                style={{position: 'fixed', bottom: '10px', right: 0}}
            >
                toggle theme
            </button>
        </div>
    )
};
