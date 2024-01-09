import { Seo } from "@/layouts/Seo";
import { useTranslation } from 'next-i18next'

export const HowItWorks: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Seo title="How it workss" />
            <section id="about" className="about content-section">
                <div className="container">
                    <div id="faq_1" className="faq-box">
                        <div className="flex-row"><div className="p-0">
                            <h5 className="about-title">{t('howitwork.t1')}</h5>
                            <p>{t('howitwork.p1')}</p>
                        </div>
                            <div className="p-0">
                                <br />
                                <h5 className="about-title">{t('howitwork.t2')}</h5>
                                <p>{t('howitwork.p2')}</p>
                            </div><div className="p-0">
                                <br />
                                <h5 className="about-title"> {t('howitwork.t2')}</h5>
                                <p>{t('howitwork.p3')}</p>
                            </div><div className="p-0">
                                <br />
                                <h5 className="about-title">{t('howitwork.t3')}</h5>
                                <p>{t('howitwork.p4')}</p>
                                <p>{t('howitwork.p5')}</p>
                            </div><div className="p-0">
                                <br />
                                <h5 className="about-title">{t('howitwork.t4')}</h5>
                                <p>{t('howitwork.p6')}</p>
                            </div></div>
                    </div>

                    <div id="faq_2" className="faq-box">
                        <div className="flex-row"><div className="p-0">
                            <br />
                            <h5 className="about-title">{t('howitwork.t5')}</h5>
                            <p>{t('howitwork.p7')}</p>
                        </div></div>
                    </div><div id="faq_3" className="faq-box">
                        <div className="flex-row"><div className="p-0">
                            <br />
                            <h5 className="about-title">{t('howitwork.t6')}</h5>
                            <p>{t('howitwork.p8')}</p>
                        </div><div className="p-0">
                                <br />
                                <h5 className="about-title">{t('howitwork.t7')}</h5>
                                <p>{t('howitwork.p9')}</p>
                            </div><div className="p-0">
                                <br />
                                <h5 className="about-title">{t('howitwork.t8')}</h5>
                                <p>{t('howitwork.p10')}</p>
                            </div><div className="p-0">
                                <br />
                                <h5 className="about-title">{t('howitwork.t9')}</h5>
                                <p>{t('howitwork.p11')}</p>
                            </div><div className="p-0">
                                <br />
                                <h5 className="about-title">{t('howitwork.t10')}</h5>
                                <p>{t('howitwork.p12')}</p>
                            </div><div className="p-0">
                                <br />
                                <h5 className="about-title">{t('howitwork.t11')}</h5>
                                <p>{t('howitwork.p13')}</p>
                            </div><div className="p-0">
                                <br />
                                <h5 className="about-title">{t('howitwork.t12')}</h5>
                                <p>{t('howitwork.p14')}</p>
                            </div><div className="p-0">
                                <br />
                                <h5 className="about-title">{t('howitwork.t13')}</h5>
                                <p>{t('howitwork.P15')}</p>
                            </div></div>
                    </div></div>
            </section>
        </>
    )
}

export default HowItWorks;