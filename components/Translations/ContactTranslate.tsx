
import WithPublic from "@/components/Route/WithPublic";
import { Seo } from "@/layouts/Seo";
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router";
import { Formik, FormikProps, Form } from "formik";
import * as yup from 'yup'
import { sendEmail } from '@/lib/action/email'
import React from "react";
import { FormErrorMessage, FormControl } from "@chakra-ui/react";
import { useState } from "react";

export interface Contact {
    name?: string,
    email?: string,
    subject?: string,
    message: string,
}
export const Contact: React.FC = () => {

    const [selected, setSelected] = useState("US");
    const { t } = useTranslation();

    const router = useRouter();
    const changeHandler = (code) => {
        setSelected(code)
        router.replace(`/${code.toLowerCase()}/${router.pathname}`)
    }

    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const SchemaLoginForm = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email().required('Email must be valid'),
        subject: yup.string().required('Subject is required'),
        message: yup.string().required('Message is required'),
    })

    const sendEmailForm = async (values,resetForm) => {
        setIsLoading(true);
        sendEmail(values);
        setIsLoading(false)
        resetForm();
    }

    return (
        <>
            <Seo title="Contact Us" />
            <section id="contact" className="section content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-text section-header text-center">
                                <div>
                                    <h2 className="section-title">{t('contact.getintouch')}</h2>
                                    <div className="desc-text">
                                        <p>
                                        {t('contact.title')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <Formik
                                onSubmit={(values, { resetForm }) => {
                                    sendEmailForm(values,resetForm);
                                }}
                                validateOnBlur={false}
                                validateOnChange={true}
                                validationSchema={SchemaLoginForm}
                                initialValues={{
                                    name: '',
                                    email: '',
                                    subject: '',
                                    message: '',
                                }}
                            >
                                {(formikProps: FormikProps<Contact>) => (
                                    <Form id="contactForm" autoComplete="off" noValidate onSubmit={formikProps.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <FormControl isInvalid={formikProps.errors.name && formikProps.touched.name}>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            name="name"
                                                            {...formikProps.getFieldProps('name')}
                                                            placeholder={t('contact.name')}
                                                            data-error="Please enter your name"
                                                        />
                                                        <FormErrorMessage>{formikProps.errors.name}</FormErrorMessage>
                                                    </FormControl>
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <FormControl isInvalid={formikProps.errors.subject && formikProps.touched.subject}>
                                                        <input
                                                            type="text"
                                                            placeholder={t('contact.subject')}
                                                            id="msg_subject"
                                                            className="form-control"
                                                            {...formikProps.getFieldProps('subject')}
                                                            name="subject"
                                                            data-error="Please enter your subject"
                                                        />
                                                        <FormErrorMessage>{formikProps.errors.subject}</FormErrorMessage>
                                                    </FormControl>
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <FormControl isInvalid={formikProps.errors.email && formikProps.touched.email}>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="email"
                                                            name="email"
                                                            {...formikProps.getFieldProps('email')}
                                                            placeholder={t('contact.email')}
                                                            data-error="Please enter your Email"
                                                        />
                                                        <FormErrorMessage>{formikProps.errors.email}</FormErrorMessage>
                                                    </FormControl>
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <FormControl isInvalid={formikProps.errors.message && formikProps.touched.message}>
                                                        <textarea
                                                            className="form-control"
                                                            id="message"
                                                            name="message"
                                                            placeholder={t('contact.message')}
                                                            rows={4}
                                                            {...formikProps.getFieldProps('message')}
                                                            data-error="Write your message"
                                                        />
                                                        <FormErrorMessage>{formikProps.errors.message}</FormErrorMessage>
                                                    </FormControl>
                                                    <div className="help-block with-errors" />
                                                </div>
                                                <div className="submit-button">
                                                    <button disabled={isLoading} className="btn btn-common" id="submit" type="submit">
                                                    {t('contact.submit')}
                                                    </button>
                                                    <div id="msgSubmit" className="h3 hidden" />
                                                    <div className="clearfix" />
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="contact-img">
                                <img src="/images/banner3.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WithPublic(Contact);