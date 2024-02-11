import { BiMenuAltLeft } from "react-icons/bi";

export const Nav = () => (
    <nav className='flex items-center gap-5'>
        <button className='menu-btn hidden' id="menu-open">
            <BiMenuAltLeft />
        </button>
        <a href="#">Music</a>
        <a href="#">Live</a>
        <a href="#">Podcast</a>
    </nav>
)