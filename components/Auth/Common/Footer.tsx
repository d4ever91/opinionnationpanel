import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import { useState } from 'react';

export const Footer: React.FC = () => {
    const router = useRouter();
    const { locale } = router;
    const { t } = useTranslation();

    const routeTo = (path) => {
        return router.push(path, path, { locale: locale });
    }
    
    return (
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
    )
}