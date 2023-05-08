import { FC, ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Container } from '../Container/Container';

interface IPageTemplate {
    children?: ReactNode
}

export const PageTemplate: FC<IPageTemplate> = ({children}) => {
    return (
        <div>
            <Header />
            <Container>
                {children}
            </Container>
        </div>
    )
};
