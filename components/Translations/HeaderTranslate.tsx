import withPublic from "@/components/Route/WithPublic";
import { customTheme } from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header  as HeaderTranslate} from "../Auth/Common/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Header: NextPage = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <HeaderTranslate />
    </ChakraProvider>
  );
};

export default withPublic(Header);
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}