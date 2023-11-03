import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Navibar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import StoreProvider from "../components/Contexts/StoreProvider";

const Root = () => {
    return (
        <StoreProvider>
            <Navibar />
            <Header />
            <Outlet />
            <Footer />
        </StoreProvider>
    );
};
export default Root;