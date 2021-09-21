// pkgs:
import { Fragment } from 'react'
import { Container } from '@chakra-ui/react'

// utils:
import './style.module.sass'
import { LayoutInterface } from '../../../common/interfaces/comps/layout.interface'

// comps:
import Footer from '../footer/footer.comp'
import Header from '../header/header.comp'

// component>>>
const Layout: React.VFC<LayoutInterface> = ({ children, expanded }) => {
    return (
        <Fragment>
            <Container maxW={expanded ? `container.xl` : `container.lg`}>
                <Header expanded={expanded} />
                {children}
                <Footer expanded={expanded} />
            </Container>
        </Fragment>
    )
}

export default Layout
