// pkgs:

// utils:
import './style.module.sass'
import { PagesHeroInterface } from '../../../common/interfaces/comps/hero.interface'

// comps:

// components>>>
const PagesHero: React.VFC<PagesHeroInterface> = ({
    children,
    heading,
    description,
}) => {
    return (
        <section className="pages-hero">
            <div className="hero-wrapper">
                <h1 className="hero-heading">{heading}</h1>
                <p className="hero-description">{description}</p>
                {children ? <div className="buttons">{children}</div> : null}
            </div>
        </section>
    )
}

export default PagesHero
