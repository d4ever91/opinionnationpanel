import { customTheme } from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginTranslate } from "@/components/Translations/LoginTranslate";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withOutAuth from "@/components/Route/WithoutAuth";

const Login: NextPage = () => {

  return (
    <ChakraProvider theme={customTheme}>
      <LoginTranslate />
      </ChakraProvider>
  );
};

export default withOutAuth(Login);
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}