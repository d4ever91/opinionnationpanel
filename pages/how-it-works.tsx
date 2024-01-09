import withPublic from "@/components/Route/WithPublic";
import HowItWorksTranslate from "@/components/Translations/HowItWorksTranslate";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HowItWork: NextPage = () => {
  return (
      <HowItWorksTranslate />
  );
};

export default withPublic(HowItWork);
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}