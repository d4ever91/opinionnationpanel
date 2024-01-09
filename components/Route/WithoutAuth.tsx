
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { customTheme } from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "../Auth/Common/Header";
import { Footer } from "../Auth/Common/Footer";

const withOutAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    const { status } = useSession();
    if (status == "authenticated") {
      router.push("/app/dashboard");
    }
    if (status !== "authenticated" && status !== "loading") {
      return <ChakraProvider theme={customTheme}>
        <Header />
        <WrappedComponent {...props} />
        <Footer />
      </ChakraProvider>
    }
  };
};

export default withOutAuth;

