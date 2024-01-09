import { Header } from "../Auth/Common/Header";
import { Footer } from "../Auth/Common/Footer";

const withPublic = (WrappedComponent: any) => {
    return (props: any) => {
        return <><Header />
            <WrappedComponent {...props} />
            <Footer />
        </>
    };
};

export default withPublic;

