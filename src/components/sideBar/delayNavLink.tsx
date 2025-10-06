import { useNavigate } from "react-router-dom";

export function DelayedNavLink({ to, isActive, action, children }: { to: string; isActive: boolean; action: () => void; children: React.ReactNode }) {
    const navigate = useNavigate();


    const handleClick = (e: React.MouseEvent) => {
        action(); // Cierra el sidebar
        e.preventDefault(); // Evita la navegación inmediata
        // Podés disparar una animación de exit acá
        setTimeout(() => {
            navigate(to);
        }, 100); // delay de 0.3s
    };

    return (
        <a
            className={`flex w-full  h-[60px]  hover:text-gray-100 no-underline px-8 text-slate-800
                                    ${isActive
                    ? ' font-semibold relative'
                    : ''
                }`
            }
            href={to} onClick={handleClick}>
            {children}
        </a>
    );
}