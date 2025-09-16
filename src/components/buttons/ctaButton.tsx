import { NavLink } from "react-router-dom";



interface CtaButtonProps {
    funcion?: () => void;
    titulo: string;
    bgcolor?: string; // Se usará como clase de Tailwind personalizada o inline style
    url: string;
}

export function CtaButton({ titulo, bgcolor, url }: CtaButtonProps) {
    return (
        <NavLink
            to={url}
            className="flex justify-center items-center gap-2 z-20 border-none bg-transparent "
        >
            <span
                className={`
          px-5 py-2 font-black text-lg border border-orange-200 rounded-full shadow-[0.1em_0.1em_0.9em_black] 
          transition-transform duration-200 cursor-pointer
          hover:translate-y-1 active:translate-y-[0.2em] active:shadow-[0.05em_0.05em_black] w-[70vw] md:w-64 text-center
            ${bgcolor ? bgcolor : 'bg-white text-black'}
        `}
            >

                {titulo}

            </span>
        </NavLink>
    );
}
