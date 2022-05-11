import Logo from "../logo/Logo";
import Menu from "../menu/Menu";

export default function Navbar() {
    return (
        <>
            <nav className="flex z-10 justify-between container my-12">
                <div>
                    <Logo />
                </div>
                <div>
                    <Menu />
                </div>
            </nav>
        </>
    )
}