import Navbar from "../reuseables/navbar";
import Footer from "../reuseables/Footer";
import {Outlet} from "react-router-dom";



const Layout =()=>{
    return(
            <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
}

export default Layout