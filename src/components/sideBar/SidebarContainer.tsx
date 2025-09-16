import { useState } from "react";
import { Sidebar } from "./Sidebar";

export default function SidebarContainer({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white ">
            <div className={`flex h-screen `}>
                <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
                <div
                    className={`
                    flex w-full  justify-center transition-all duration-300 ease-in-out
                `}>
                    {children}
                </div>
            </div>
        </div>
    );
}

//  ${sidebarOpen ? 'pr-[220px]' : 'pr-[65px]'}