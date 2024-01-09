import { useState } from "react";
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router";
import CountrySelector from "../App/Country/CountrySelect";

export const HomeTranslate: React.FC = () => {

    const router = useRouter();
    const { locale } = router;
    const [selected, setSelected] = useState(locale == 'en' ? 'US' : locale.toUpperCase());
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

    return (
        <>

            <header id="home" className="hero-area">
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
                                    <a className="btn btn-singin" onClick={() => routeTo("/auth/register")}>
                                        {t('header.register')}
                                    </a>
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
                <div className="container">
                    <div className="row space-100">
                        <div className="col-lg-12 col-md-12 col-xs-12 p-0">
                            <div className="intro-img">
                                <img src="/images/banner1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12">
                            <div className="contents">
                                <h2 className="head-title">
                                    {t('home.title')}
                                </h2>
                                <p>
                                    {t('home.subtitle')}
                                    <br />
                                </p>
                                <div className="header-button">
                                    <a href="/auth/register" className="btn btn-border-filled">
                                        {t('home.getstart')}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            <section id="features" className="section">
                <div className="container">
                    {/* Start Row */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="features-text section-header text-center">
                                <div>
                                    <h2 className="section-title"> {t('home.title2')}</h2>
                                    <div className="desc-text">
                                        <p>
                                            {t('home.subtitle2')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* End Row */}
                    {/* Start Row */}
                    <div className="row featured-bg">
                        {/* Start Col */}
                        <div className="col-lg-6 col-md-6 col-xs-12 p-0">
                            {/* Start Fetatures */}
                            <div className="feature-item featured-border1">
                                <div className="icons">
                                <i className="lni-users"></i>
                                </div>
                                <div className="feature-info float-left">
                                    <h4> {t('home.signup')}</h4>
                                    <p>
                                        {t('home.p1')} <br /> {t('home.p2')}
                                        <br />
                                    </p>
                                </div>
                            </div>
                            {/* End Fetatures */}
                        </div>
                        {/* End Col */}
                        {/* Start Col */}
                        <div className="col-lg-6 col-md-6 col-xs-12 p-0">
                            {/* Start Fetatures */}
                            <div className="feature-item featured-border2">
                            <div className="icons">
                                <i className="lni lni-user"></i>
                                </div>
                                <div className="feature-info float-left">
                                    <h4>{t('home.completeprofile')} </h4>
                                    <p>
                                        {t('home.p3')} <br /> {t('home.p4')}
                                        <br />
                                    </p>
                                </div>
                            </div>
                            {/* End Fetatures */}
                        </div>
                        {/* End Col */}
                        {/* Start Col */}
                        <div className="col-lg-6 col-md-6 col-xs-12 p-0">
                            {/* Start Fetatures */}
                            <div className="feature-item featured-border1">
                            <div className="icons">
                                <i className="lni lni-layers "></i>
                                </div>
                                <div className="feature-info float-left">
                                    <h4>{t('home.takesurvey')}</h4>
                                    <p>
                                        {t('home.p5')}  <br />  {t('home.p6')}
                                        <br />
                                    </p>
                                </div>
                            </div>
                            {/* End Fetatures */}
                        </div>
                        {/* End Col */}
                        {/* Start Col */}
                        <div className="col-lg-6 col-md-6 col-xs-12 p-0">
                            {/* Start Fetatures */}
                            <div className="feature-item featured-border2">
                            <div className="icons">
                                <i className="lni lni-money-protection"></i>
                                </div>
                                <div className="feature-info float-left">
                                    <h4> {t('home.earnrewards')}</h4>
                                    <p>
                                        {t('home.p7')} <br />  {t('home.p8')}
                                        <br />
                                    </p>
                                </div>
                            </div>
                            {/* End Fetatures */}
                        </div>
                        {/* End Col */}
                        {/* Start Col */}

                    </div>
                    {/* End Row */}
                </div>
            </section>
            <section id="business-plan">
                <div className="container">
                    <div className="row">
                        {/* Start Col */}
                        <div className="col-lg-6 col-md-12 pl-4">
                            <div className="business-item-info">
                                <h3>{t('home.joinrewards')} </h3>
                                <p>
                                    {t('home.p9')}
                                </p>
                                <a className="btn btn-common" href="/auth/register">
                                    {t('home.joinnow')}
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12  pt-70">
                            <div className="business-item-img">
                                <img
                                    src="/images/banner2.png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        {/* End Col */}
                        {/* Start Col */}
 
                        {/* End Col */}
                    </div>
                </div>
            </section>
            <footer>
                {/* Footer Area Start */}
                <section id="footer-Content">
                    <div className="container">
                        {/* Start Row */}
                        <div className="row">
                            {/* Start Col */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                                <div className="footer-logo">
                                    <img width="200" src="/images/log.png" alt="" />
                                </div>
                            </div>
                            {/* End Col */}
                            {/* Start Col */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                                <div className="widget">
                                    <h3 className="block-title">{t('footer.getintouch')}</h3>
                                    <ul className="menu">
                                        <li> <a target="_blank" href="mailto:sales@wolfinsights.com">sales@opinion-nation.com</a></li>
                                        <li> <a target="_blank" href="mailto:info@opinion-nation.com">info@opinion-nation.com</a></li>
                                        <li> <a href="tel:+1 2178230316">+1 2178230316</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Col */}
                            {/* Start Col */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                                <div className="widget">
                                    <h3 className="block-title">{t('footer.quicklinks')}</h3>
                                    <ul className="menu">
                                        <li>
                                            <a onClick={() => routeTo('/how-it-works')}>{t('footer.howitworks')}</a>
                                        </li>
                                        <li>
                                            <a onClick={() => routeTo('/about')}>{t('footer.about')}</a>
                                        </li>
                                        <li>
                                            <a onClick={() => routeTo('/reward')}>{t('footer.rewards')}</a>
                                        </li>
                                        <li>
                                            <a onClick={() => routeTo('/contact')}>{t('footer.contact')}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                                <div className="widget">
                                    <h3 className="block-title">{t('footer.company')}</h3>
                                    <ul className="menu">
                                        <li>
                                            <a onClick={() => routeTo('/privacy-policy')}>{t('footer.privacy')}</a>
                                        </li>
                                        <li>
                                            <a onClick={() => routeTo('/term-of-use')}>{t('footer.termsofuse')}</a>
                                        </li>
                                        <li>
                                            <a onClick={() => routeTo('/cookie-pol')}>{t('footer.cookiepolicy')}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Col */}
                            {/* Start Col */}
                            {/* End Col */}
                            {/* Start Col */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                                <div className="widget">
                                    <h3 className="block-title">{t('footer.social')}</h3>
                                    <ul className="menu social-links">
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    {/* Copyright Start  */}
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="site-info text-center">
                                        <p>
                                            © 2023 Opinion Nation, {t('footer.allseatreserved')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default HomeTranslate;