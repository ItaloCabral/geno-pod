import { RiLogoutCircleLine } from "react-icons/ri";

import LogoImg from '../../assets/logo.png';

import './style.css';

export const Sidebar = ({ children }: {children: React.ReactNode}) => (
    <aside className="h-screen bg-zinc-900 py-5 px-9 flex flex-col justify-between z-10 transition">
        <div className="logo mx-auto">
            <button className="hidden">
                <RiLogoutCircleLine />
            </button>
            <img src={LogoImg} height={20} width={160} />
        </div>

        {children}

    </aside>
)
