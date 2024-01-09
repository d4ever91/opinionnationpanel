import ContactTranslate from "@/components/Translations/ContactTranslate";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export interface Contact {
  name?: string,
  email?: string,
  subject?: string,
  message: string,
}

const Contact: NextPage = () => {

  return (
      <ContactTranslate />
  );
};

export default Contact;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
