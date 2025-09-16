
import { useLocation } from "react-router-dom";



interface SidebarItemsProps {
    link: string;
    icon: React.ReactNode;
    title: string;
    description?: string;
}

export function SidebarItem({
    link,
    icon,
    title,
    description
}: SidebarItemsProps
) {

    const { pathname } = useLocation();

    return (
        <a
            href={link}
            className={`
                ${styles.link}
                ${pathname === link ? "bg-blue-800" : "hover:bg-blue-700"}
                `}>
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">{title}</span>
                <span className="text-sm text-slate-500 ">{description}</span>
            </div>
        </a>
    );
}

// Styles Tailwind CSS
const styles = {
    link: "w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
    ,
}