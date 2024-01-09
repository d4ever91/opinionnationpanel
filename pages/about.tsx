import withPublic from "@/components/Route/WithPublic";
import AboutTranslate from "@/components/Translations/AboutTranslate";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About: NextPage = () => {
    return (
        <AboutTranslate />
    );
};

export default withPublic(About);
export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}