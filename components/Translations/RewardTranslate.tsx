import { Seo } from "@/layouts/Seo";
import { useTranslation } from 'next-i18next'

export const RewardTranslate: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Seo title="Our Rewards" />
            <section id="about" className="about content-section">
                <div className="container">
                    <p >{t('reward.p1')}</p>
                    <br />
                    <h5 className="about-title" >{t('reward.t1')}</h5>
                    <p >{t('reward.p2')}</p>
                    <br />
                    <h5 className="about-title" >{t('reward.t2')}</h5>
                    <p >{t('reward.p3')}</p>
                    <p >{t('reward.p4')}</p>
                    <br />
                    <h5 className="about-title" >{t('reward.t3')}</h5>
                    <p >{t('reward.p5')}</p>
                    <br />
                    <h5 className="about-title" >{t('reward.t4')}</h5>
                    <p >{t('reward.p6')}</p>
                    <br />
                    <h5 className="about-title">{t('reward.t5')}</h5>
                    <p >{t('reward.p7')}</p>
                    <div className="reward-inner-section">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 10.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 11.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 12.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 13.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row  pt-4">
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 14.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 15.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 16.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 17.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 18.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 20.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 21.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 22.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 23.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 24.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 25.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <div className="inner-img">
                                <img style={{maxWidth:'100%'}} src="/images/reward/Rectangle 26.png" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RewardTranslate;