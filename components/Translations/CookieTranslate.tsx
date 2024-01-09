import { Seo } from "@/layouts/Seo";
import { useTranslation } from 'next-i18next'

export const CookiePolicy: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Seo title="Cookie Policy" />
            <section id="about" className="about content-section">
                <div className="container">
                    <p>{t('cookie.p1')}</p>
                    <br />
                    <p>{t('cookie.p2')}</p>
                    <br />
                    <p>{t('cookie.p3')}</p>
                    <br />
                    <p>{t('cookie.p4')}</p>
                    <br />
                    <p>{t('cookie.p5')}</p>
                    <br />
                    <p>{t('cookie.p6')}</p>
                    <br />
                    <p>{t('cookie.p7')}</p>
                    <br />
                    <p>{t('cookie.p8')}</p>
                    <br />
                    <p>{t('cookie.p9')}</p>
                    <br />
                    <p>{t('cookie.p10')}</p>
                    <br />
                    <p>{t('cookie.p11')}</p>
                </div>
            </section>
        </>
    )
}

export default CookiePolicy;