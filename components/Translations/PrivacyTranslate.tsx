import { Seo } from "@/layouts/Seo";
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router";

export const PrivacyTranslate: React.FC = () => {
    const { t } = useTranslation();
    const { locale } = useRouter();
    const router = useRouter();
    const changeHandler = (e) => {
        router.replace(`/${e.target.value.toLowerCase()}/privacy-policy`)
    }
    return (
        <>
            <Seo title="Privacy Policy" />
            <section id="privacy" className="privacy content-section">
                <div className="container">
                    <p ><strong>{t('privacy.t1')}</strong></p>
                    <p ><strong>1.{t('privacy.l1')}</strong></p>
                    <p >{t('privacy.p1')}<br /><br /><strong>2. {t('privacy.l2')}</strong></p>
                    <p >{t('privacy.p2')}<br />{t('privacy.p3')} <br />{t('privacy.p4')}  <br />{t('privacy.p5')} <br /><br />{t('privacy.p6')}<strong><a href="mailto: info@opinion-nation.com">info@opinion-nation.com</a></strong></p>
                    <p ><strong>3. {t('privacy.l3')}</strong></p>
                    <p >{t('privacy.p7')}</p>
                    <p ><strong>4. {t('privacy.l4')}</strong></p>
                    <p >{t('privacy.p8')}</p>
                    <p ><strong>5. {t('privacy.l5')}</strong></p>
                    <p >{t('privacy.p9')}</p>
                    <p ><strong>6. {t('privacy.l6')}</strong></p>
                    <p > {t('privacy.p10')}<br />{t('privacy.p11')}</p>
                    <p >{t('privacy.p12')}</p>
                    <p >{t('privacy.p13')}</p>
                    <p >{t('privacy.p14')}</p>
                    <p ><strong>7. {t('privacy.l7')}</strong></p>
                    <p >{t('privacy.p15')}<a href="/cookie-pol"><strong>{t('privacy.p16')}</strong></a></p>
                    <p ><strong>8. {t('privacy.l8')}</strong></p>
                    <p >{t('privacy.p17')}</p>
                    <p ><strong>9. {t('privacy.l9')}</strong></p>
                    <p >{t('privacy.p18')}</p>
                    <p ><strong>10. {t('privacy.l10')}</strong></p>
                    <p >{t('privacy.p19')}</p>
                    <p >{t('privacy.p20')}</p>
                    <p ><strong>11. {t('privacy.l11')}</strong></p>
                    <p >{t('privacy.p21')}<br /><br />{t('privacy.p22')}<br /><br />{t('privacy.p23')}<br /><br />{t('privacy.p24')}</p>
                    <p ><strong>12.</strong> <strong>{t('privacy.l12')}</strong></p>
                    <p ><strong>12.1</strong> {t('privacy.p25')}</p>
                    <p ><strong>12.2</strong> {t('privacy.p26')}<br />{t('privacy.p27')}<br />{t('privacy.p28')}<br />{t('privacy.p29')}<br />{t('privacy.p30')}<br />{t('privacy.p31')}<br />{t('privacy.p32')}<br />{t('privacy.p33')}<br />{t('privacy.p34')}</p>
                    <p ><strong>12.3</strong>{t('privacy.p35')}</p>
                    <p ><strong>12.4</strong>{t('privacy.p36')}</p>
                    <p ><strong>12.5</strong>{t('privacy.p37')}</p>
                    <p ><strong>12.6</strong> {t('privacy.p38')}</p>
                    <p ><strong>12.7</strong> {t('privacy.p39')}</p>
                    <p ><strong>12.8</strong>{t('privacy.p40')}</p>
                    <p ><strong>12.9</strong>{t('privacy.p41')}</p>
                    <p ><strong>12.10</strong>{t('privacy.p42')}<br />{t('privacy.p43')}<br />{t('privacy.p44')}</p>
                    <p ><strong>12.11</strong>{t('privacy.p45')}</p>
                    <p ><strong>12.12</strong> {t('privacy.p46')}</p>
                    <p ><strong>12.13</strong> {t('privacy.p47')}</p>
                    <p >{t('privacy.p48')}</p>
                    <p >{t('privacy.p49')}</p>
                    <p ><strong>13. {t('privacy.l13')}</strong></p>
                    <p >{t('privacy.p50')}</p>
                    <p >{t('privacy.p51')}</p>
                    <p >{t('privacy.p52')}</p>
                    <p ><strong>14. {t('privacy.l14')}</strong></p>
                    <p >{t('privacy.p53')}</p>
                    <p >{t('privacy.p54')}</p>
                    <p >{t('privacy.p55')}</p>
                    <p >{t('privacy.p56')}</p>
                    <p >{t('privacy.p57')}</p>
                    <p >{t('privacy.p58')}</p>
                    <p ><strong>15.&nbsp;{t('privacy.l15')}<br /></strong></p>
                    <p>{t('privacy.p59')}</p>
                    <p>{t('privacy.p60')}</p>
                    <p>{t('privacy.p61')}</p>
                    <p>{t('privacy.p62')}</p>
                    <p>{t('privacy.p63')}</p>
                    <p>{t('privacy.p64')}</p>
                    <p>{t('privacy.p65')}</p>
                    <p>{t('privacy.p66')}</p>
                    <p>{t('privacy.p67')}</p>
                    <p>{t('privacy.p68')}</p>
                    <p><strong>{t('privacy.t2')}</strong></p>
                    <ol>
                        <li>{t('privacy.p69')}</li>
                        <li>{t('privacy.p70')}</li>
                        <li>{t('privacy.p71')}</li>
                        <li>{t('privacy.p72')}</li>
                        <li>{t('privacy.p73')}</li>
                        <li>{t('privacy.p74')}</li>
                        <li>{t('privacy.p75')}</li>
                    </ol>
                    <p><strong>{t('privacy.t3')}</strong></p>
                    <ol>
                        <li>{t('privacy.p76')}</li>
                        <li>{t('privacy.p77')}</li>
                        <li>{t('privacy.p78')}</li>
                        <li>{t('privacy.p79')}</li>
                        <li>{t('privacy.p80')}</li>
                        <li>{t('privacy.p81')}</li>
                        <li>{t('privacy.p82')}</li>
                    </ol>
                    <p>{t('privacy.p83')}</p>
                    <p><em>{t('privacy.p84')}</em></p>
                    <p>{t('privacy.p85')}</p>
                    <p>{t('privacy.p89')}</p>
                    <p>{t('privacy.p90')}</p>
                    <p>{t('privacy.p91')}</p>
                    <p><em>{t('privacy.p92')}</em></p>
                    <p>{t('privacy.p93')}</p>
                    <p><em>{t('privacy.p94')}</em></p>
                    <p>{t('privacy.p95')}</p>
                    <p><em>{t('privacy.p96')}</em></p>
                    <p>{t('privacy.p97')}</p>
                    <p><em>{t('privacy.p98')}</em></p>
                    <p>{t('privacy.p99')}</p>
                    <p ><strong>16.{t('privacy.t4')}</strong></p>
                    <p>{t('privacy.p100')}<br />{t('privacy.p101')}<br />{t('privacy.p102')}, <br />{t('privacy.p103')} <br />{t('privacy.p104')} <br />{t('privacy.p105')} <strong><a href="mailto:dpo@opinion-nation.com" target="_blank" rel="noopener noreferrer">dpo@opinion-nation.com</a></strong></p>
                </div>
            </section>
        </>
    )
}

export default PrivacyTranslate;