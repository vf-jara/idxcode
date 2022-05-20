import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            <main className="mt-20">{children}</main>
            <Footer />
        </>
    )
}