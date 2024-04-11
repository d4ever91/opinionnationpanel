import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next'
import CountrySelector from '@/components/App/Country/CountrySelect';
import { useSession } from "next-auth/react";

export const Header: React.FC = () => {

    const router = useRouter();
    const { locale } = router;
    const { status } = useSession();
    const [selected, setSelected] = useState(locale == 'en' ? 'US' : locale.toUpperCase() );
    const { t } = useTranslation();



    const changeHandler = (code) => {
        setSelected(code)
        if (code == 'US') {
            return router.push(router.pathname, router.pathname, { locale: 'en' });
        }
        return router.push(router.pathname, router.pathname, { locale: code.toLowerCase() });
    }

    const routeTo = (path) => {
        setSelected(locale.toUpperCase())
        return router.push(path, path, { locale: locale });
    }

    return (<header id="home" className="hero-area">
        <nav className="top-nav  navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <img width="150" src="/images/log.png" alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="lni-menu" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto w-100 justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link page-scroll" onClick={() => routeTo("/")}>
                                {t('header.home')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" onClick={() => routeTo("/about")}>
                                {t('header.about')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" onClick={() => routeTo("/how-it-works")}>
                                {t('header.howitworks')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" onClick={() => routeTo("/reward")}>
                                {t('header.rewards')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" onClick={() => routeTo("/contact")}>
                                {t('header.contact')}
                            </a>
                        </li>
                        <li className="nav-item">
                           {status != 'unauthenticated' ? <a className="btn btn-singin" onClick={() => routeTo("/app/dashboard")}>
                                {t('header.dashboard')}
                            </a>: <a className="btn btn-singin" onClick={() => routeTo("/auth/register")}>
                                {t('header.register')}
                            </a>}
                        </li>
                        <li className="nav-item">
                            <CountrySelector
                                selected={selected}
                                changeHandler={changeHandler}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>)

}