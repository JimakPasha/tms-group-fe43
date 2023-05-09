import { FC, ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';

interface IPageTemplate {
    children?: ReactNode
}

export const PageTemplate: FC<IPageTemplate> = ({children}) => {
    return (
        <>
            <Header />
            <Container>
                {children}
                <Footer />
            </Container>
        </>
    )
};
