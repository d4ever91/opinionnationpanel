import withPublic from "@/components/Route/WithPublic";
import TermsTranslate from "@/components/Translations/TermsTranslate";
import { customTheme } from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Terms: NextPage = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <TermsTranslate />
    </ChakraProvider>
  );
};

export default withPublic(Terms);
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}