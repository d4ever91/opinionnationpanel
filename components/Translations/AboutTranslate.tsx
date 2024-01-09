import { Seo } from "@/layouts/Seo";
import { useTranslation } from 'next-i18next'

export const AboutTranslate: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Seo title="About Us" />
            <section id="about" className="about content-section">
                <div className="container">
                <p> {t('about.p1')}</p>
                <p> {t('about.p2')}</p>
                    <br/>
                    <h2 className="about-title" >{t('about.t1')}</h2>
                    <p> {t('about.p3')}</p>
                    <p> {t('about.p4')}</p>
                    <p> {t('about.p5')}</p>
                    <p> {t('about.p6')}</p>
                    <br/>
                    <h2 className="about-title" >{t('about.t2')}</h2>
                    <p> {t('about.p7')}</p>
                    <p> {t('about.p8')}</p>
                    <br/>
                    <h2 className="about-title" >{t('about.t3')}</h2>
                    <p> {t('about.p10')}</p>
                    <p> {t('about.p11')}</p>
                    <p>&nbsp;</p>
                </div>
            </section>
        </>
    )
}

export default AboutTranslate;