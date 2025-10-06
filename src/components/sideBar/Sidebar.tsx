import { useLocation } from "react-router-dom";
import { FiMonitor, FiUser, FiHome, FiChevronRight } from "react-icons/fi";
import LanguageSelector from './language';
import { useTranslation } from 'react-i18next';

import { DelayedNavLink } from "./delayNavLink";

// assets
import logo from "../../assets/logos/logo_black.png";
import ScrambleText from "../textAnimation/scrambleText";

const LinksArray = [
    {
        label: "home",
        icon: <FiHome />,
        to: "/",
    },
    {
        label: "about",
        icon: <FiUser />,
        to: "/about",
    },
    {
        label: "projects",
        icon: <FiMonitor />,
        to: "/projects",
    },
];


export function Sidebar({ state, setState }: { state: boolean; setState: (state: boolean) => void }) {
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
        <>
            <a
                className={`fixed top-[100px] w-10 h-10 rounded-full 
                    bg-slate-100 shadow-md hover:shadow-lg border-2 border-orange-400
                    flex items-center justify-center cursor-pointer transition-all duration-200 z-50
                    text-slate-900
                    ${state ? 'left-[1vw] sm:left-[auto] sm:right-[92vw] md:right-[195px] ' : 'right-[43px] rotate-180'}
                `}
                onClick={() => setState(!state)}
            >
                <FiChevronRight className="text-[20px] transition-transform duration-300" />
            </a>

            {/* Sidebar Container */}
            <div
                className={`
                    fixed right-0 top-0 pt-5 z-40 h-full transition-all duration-300 ease-in-out
                    overflow-y-auto overflow-x-hidden
                     bg-white border-l-2 border-gray-200 dark:bg-gray-100 dark:border-orange-400
                    scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600
                    scrollbar-track-transparent scrollbar-thumb-rounded-lg
                    ${state ? 'w-[95vw] bg-orange-400/95 md:w-[220px]' : 'w-[65px]'}
                `}
            >
                {/* Logo Content */}
                <div className={`flex w-full justify-center items-center pt-[30px] md:pt-[15px] pb-[120px]
                    ${state ? 'gap-8' : ' gap-0'}
                    `}>
                    <div
                        className={`flex justify-center items-center w-[30px]   
                            transition-transform duration-300 ease-in-out 
                            ${state ? 'scale-[4] md:scale-[2] justify-between' : 'scale-[1.5]'}
                        `}
                    >
                        <img
                            src={logo}
                            className="w-full"
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                    </div>
                    <h2 className={`transition-opacity duration-500 ease-in-out text-xl md:text-sm text-nowrap text-slate-900
                                        ${state ? 'flex' : 'hidden'}
                                    `}
                    >
                        Armando Arano
                    </h2>
                </div>

                {/* Primary Links */}
                {LinksArray.map(({ icon, label, to }) => {
                    const isActive = pathname === to || pathname.startsWith(to + '/')

                    return (
                        <div
                            key={label}
                            className={`flex justify-between mx-0 my-[5px] transition-all duration-300 ease-in-out relative
                                hover:bg-gradient-to-r hover:from-slate-900/65 hover:to-slate-900/0 
                                ${state ? 'px-0' : 'px-[5%]'}
                                ${isActive
                                    ? 'before:content-[""] before:absolute before:right-0 before:h-full before:w-1 before:bg-orange-400 before:rounded-l-lg before:shadow-[-10px_0_30px_10px_rgba(5,5,5,0.4)]'
                                    : ''
                                }
                            `}
                        >
                            <DelayedNavLink
                                to={to}
                                isActive={isActive}
                                action={() => setState(false)}
                            >
                                <div className={` flex w-full justify-around items-center 
                                ${state ? 'justify-between' : 'justify-center '}
                                    `}>
                                    <div className=" flex">
                                        <div className="text-[25px]  ">
                                            {icon}
                                        </div>
                                    </div>
                                    <span
                                        className={`transition-opacity duration-300 ease-in-out text-2xl md:text-sm uppercase dark:text-slate-800 
                                        ${state ? 'block' : 'hidden'}
                                    `}
                                    >
                                        <ScrambleText text={t(`sidebar.${label}`)} />

                                    </span>
                                </div>
                            </DelayedNavLink>
                        </div>
                    )
                })}

                {/* Divider */}
                <div className="h-px w-full bg-gray-200 dark:bg-gray-600 my-6" />

                {/* Seccion de Cambio de lenguaje y de tema */}
                <LanguageSelector state={state} />
            </div>
        </>
    );
}