import { ElementType } from "react";

type MenuItemProps = {
    href: string;
    label: string;
    icon: ElementType;
};

export const MenuItem = ({ href, label, icon: Icon }: MenuItemProps) => (
    <li className="flex text-lg items-center gap-6 w-full transition hover:text-slate-500 hover:cursor-pointer font-bold my-2">
        <Icon />
        <a href={href}>{label}</a>
    </li>
);
