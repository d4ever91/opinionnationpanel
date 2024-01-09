import { Seo } from "@/layouts/Seo";
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router";
import { useState } from "react";

export const TermsTranslate: React.FC = () => {
    const [selected, setSelected] = useState("US");
    const { t } = useTranslation();

    const router = useRouter();
    const changeHandler = (code) => {
        setSelected(code)
        router.replace(`/${code.toLowerCase()}/${router.pathname}`)
    }

    return (
        <>
            <Seo title="Terms Of Use" />
            <section id="term" className="term content-section">
                <div className="container">
                    <p ><strong>{t('terms.t1')}</strong></p>
                    <p >{t('terms.p1')}</p>
                    <p ><strong>{t('terms.t2')}</strong></p>
                    <ol >
                        <li>{t('terms.l1')}<br /><br /></li>
                        <li>{t('terms.l2')}<br /><br /></li>
                        <li>{t('terms.l3')}<br /><br /></li>
                        <li>{t('terms.l4')}<br /><br /></li>
                        <li>{t('terms.l5')}<br /><br /></li>
                        <li>{t('terms.l6')}<br /><br /></li>
                        <li>{t('terms.l7')}<br /><br /></li>
                        <li>{t('terms.l8')}<br /><br /></li>
                        <li>{t('terms.l9')}<br /><br /></li>
                        <li>{t('terms.l10')}<br /><br /></li>
                        <li>{t('terms.l11')}<br /><br /></li>
                        <li>{t('terms.l12')}<br /><br /></li>
                        <li>{t('terms.l13')}<br /><br /></li>
                        <li>{t('terms.l14')}<br /><br /></li>
                    </ol>
                    <p ><strong>{t('terms.t3')}</strong></p>
                    <p>{t('terms.p2')}</p>
                    <p >{t('terms.p3')}</p>
                    <p ><strong>{t('terms.t4')}</strong></p>
                    <p >{t('terms.p4')}</p>
                    <p ><strong>{t('terms.t5')}</strong></p>
                    <p >{t('terms.p5')}</p>
                    <p ><strong>{t('terms.t6')}</strong></p>
                    <p >{t('terms.p6')}</p>
                    <p ><strong>{t('terms.t7')}</strong></p>
                    <p >{t('terms.p7')}</p>
                    <p ><strong>{t('terms.t8')}</strong></p>
                    <p >{t('terms.p8')}</p>
                    <p ><strong>{t('terms.t9')}</strong></p>
                    <p >{t('terms.p9')}</p>
                    <p ><strong>{t('terms.t10')}</strong></p>
                    <p >{t('terms.p10')}</p>
                    <p ><strong>{t('terms.t11')}</strong></p>
                    <p >{t('terms.p11')}</p>
                    <p ><strong>{t('terms.t12')}</strong></p>
                    <p >{t('terms.p12')}</p>
                    <p ><strong>{t('terms.t13')}</strong></p>
                    <p>{t('terms.p13')}&nbsp;<a href="https://panelapp.opinion-nation.com/privacy-policy" target="_blank" rel="noopener noreferrer"><strong>https://Opinion Nation.com/privacy-policy</strong></a></p>
                </div>
            </section>
        </>
    )
}

export default TermsTranslate;