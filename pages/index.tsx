import { HomeTranslate } from "@/components/Translations/HomeTranslate";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {

  return (
      <HomeTranslate />
  );
};

export default Home;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}