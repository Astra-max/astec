import Navbar from "../Navbar/Navbar";
import Footer from "./footerone";
import SectionOne from "./section_1";
import Card from "./secction_courses";
import Login from "../auth/login";
import useToken from "../lib/useToken";

export default function Layout({children}) {
    const {token, setToken} = useToken()
    if (!token) return <Login setToken={setToken} />
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