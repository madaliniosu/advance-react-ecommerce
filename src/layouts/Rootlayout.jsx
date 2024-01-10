import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

export default function Rootlayout () {
    return(
        <div>
            <Navbar />
            < Outlet />
            <Footer />
        </div>
    )
}