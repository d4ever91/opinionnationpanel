import { customTheme } from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withOutAuth from "@/components/Route/WithoutAuth";
import { ForgotTranslate } from "@/components/Translations/ForgotTranslate";

const Forget: NextPage = () => {

  return (
    <ChakraProvider theme={customTheme}>
      <ForgotTranslate />
      </ChakraProvider>
  );
};

export default withOutAuth(Forget);
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}