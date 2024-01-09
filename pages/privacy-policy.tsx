import withPublic from "@/components/Route/WithPublic";
import { PrivacyTranslate } from "@/components/Translations/PrivacyTranslate";
import { customTheme } from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Privacy: NextPage = () => {

  return (
    <ChakraProvider theme={customTheme}>
      <PrivacyTranslate />
    </ChakraProvider>
  );
};

export default withPublic(Privacy);
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}