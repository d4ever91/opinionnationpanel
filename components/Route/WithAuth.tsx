
import SimpleSidebar from "@/components/App/Sidebar";
import { customTheme } from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SpinnerLayout from "@/components/Common/SpinnerLayout";
import PageFooter from "../App/Footer/Footer";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { status } = useSession();
    if (status == "loading") {
      return <ChakraProvider theme={customTheme}>
        <SpinnerLayout />
      </ChakraProvider>;
    }
    if (status == "authenticated") {
      return <ChakraProvider theme={customTheme}>
        <SimpleSidebar>
          <WrappedComponent {...props} />
        </SimpleSidebar>
        <div style={{marginBottom:50}}></div>
        <PageFooter/>
      </ChakraProvider>;
    }
    else {
      router.push("/auth/login");
    }
  }
};

export default withAuth;


