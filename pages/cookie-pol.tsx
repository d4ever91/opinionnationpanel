import withPublic from "@/components/Route/WithPublic";
import CookieTranslate from "@/components/Translations/CookieTranslate";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const CookiePolicy: NextPage = () => {
    return (
        <CookieTranslate />
    );
};

export default withPublic(CookiePolicy);
export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}