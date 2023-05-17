import { FC, ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { useAppContext } from '../../contexts/AppContex';

interface IPageTemplate {
    children?: ReactNode
}

export const PageTemplate: FC<IPageTemplate> = ({children}) => {
    const { toggleTheme } = useAppContext();

    const handleToggleTheme = () => {
        toggleTheme();
    }

    return (
        <>
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
        </>
    )
};
