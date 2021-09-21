// pkgs:
import { VFC, useState } from 'react'
// utils:
import './style.module.sass'
import { HeaderInterface } from '../../../common/interfaces/comps/header.interface'

// comps:

// component>>>
const Header: VFC<HeaderInterface> = ({ expanded }) => {
    // preConfigured hooks:

    // mobile || side menu, you might need to create a redux slice
    const [isSideMenuOpened, setIsSideMenuOpened] = useState<boolean>(false)

    return (
        // depending on {expanded} so wether to view a default header or the minimal one.
        <header className="default-header">
            <div className="default-header-wrapper">
                {/* ---- logo or identity ---- */}
                <section className="left-wing">
                    <div className="logo">Header LOGO</div>
                </section>
                {/* ---- routes ---- */}
                <section className="right-wing"></section>
                <section className="x-menu-toggler"></section>
            </div>

            {/* ---- x-menu AKA mobile-menu ---- */}
            <header className="mobile-header"></header>
        </header>
    )
}

export default Header
