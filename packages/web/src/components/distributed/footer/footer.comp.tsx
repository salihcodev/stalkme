// pkgs:
import { VFC } from 'react'
import { FaHeart } from 'react-icons/fa'
import { AiOutlineCoffee } from 'react-icons/ai'

// utils:
import './style.module.sass'
import { FooterInterface } from '../../../common/interfaces/comps/footer.interface'

// comps:

// component>>>
const Footer: VFC<FooterInterface> = ({ expanded }) => {
    return (
        <footer className="default-footer">
            <p className="author">
                Built with
                <span className="icon">
                    <FaHeart />
                </span>
                and
                <span className="icon">
                    <AiOutlineCoffee />
                </span>
                in
                <span className="icon">
                    <code>Menufia, Egypt</code>
                </span>
            </p>
            <p className="reservation">
                <span className="icon">©</span>Copyright{' '}
                {new Date().getFullYear()}
                <span>
                    <a
                        href="https://asalih.netlify.com/me"
                        target="_blank noopener noreferer"
                    >
                        @salihcodev
                    </a>
                </span>
                All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
