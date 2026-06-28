import Navbar from "../Navbar/Navbar";
import Footer from "./footerone";
import SectionOne from "./section_1";
import Card from "./secction_courses";
import Login from "../auth/login";
import { useSelector } from "react-redux";

export default function Layout({children}) {
    const {token} = useSelector((state)=>state.auth)
    if (!token) return <Login />
    return (
        <>
          <Navbar />
            {children}
            <SectionOne />
            <Card />
          <Footer />
        </>
    )
}