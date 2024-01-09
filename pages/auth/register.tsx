import { customTheme } from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withOutAuth from "@/components/Route/WithoutAuth";
import { RegisterTranslate } from "@/components/Translations/RegisterTranslate";

const Register: NextPage = () => {

  return (
    <ChakraProvider theme={customTheme}>
      <RegisterTranslate />
    </ChakraProvider>
  );
};

export default withOutAuth(Register);
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}