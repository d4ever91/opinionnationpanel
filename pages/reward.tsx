import withPublic from "@/components/Route/WithPublic";
import RewardTranslate from "@/components/Translations/RewardTranslate";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Reward: NextPage = () => {
    return (
        <RewardTranslate />
    );
};

export default withPublic(Reward);
export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}