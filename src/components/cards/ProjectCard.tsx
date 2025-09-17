
import { useTranslation } from "react-i18next";
import ScrambleText from "../textAnimation/scrambleText";


interface ProjectProps {
    refTranslation: string;
    title: string;
    link: string;
    tech?: (string)[];
    bgImage: string | null;
    outside?: boolean;
}

export default function ProjectCard({
    refTranslation,
    title,
    link,
    tech,
    bgImage,
    outside = true,
}: ProjectProps) {
    const { t } = useTranslation();


    return (
        <a
            href={link}
            target={outside ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="relative w-full rounded-lg border shadow-sm overflow-hidden border-transparent shadow-transparent grid group
            hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out hover:border-stone-200 
            "
        >

            {/* Fondo con efecto zoom */}
            <div className="absolute inset-0 overflow-hidden blur-xs">
                {bgImage && (
                    <img
                        src={bgImage}
                        alt={title}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                )}

                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Title y tech */}
            <div className="relative z-10 w-full pt-10 flex flex-col  md:flex-row text-center md:text-start px-6 pb-6 items-center justify-between gap-4">
                <p className="font-sans text-4xl text-stone-100 font-semibold stroke-black">{t(`projects.${refTranslation}.title`)}</p>
                {tech && tech.length > 0 && (
                    <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                        {tech.map((icon, idx) => (
                            <div key={idx} className="w-7 h-7 relative ">
                                <img
                                    src={icon}
                                    alt={`Tech-${idx}`}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="relative z-10 p-6">
                <blockquote className="font-sans font-bold text-lg md:text-xl lg:text-2xl text-stone-200 [text-wrap:_balance] md:text-start text-center stroke-black">
                    <ScrambleText text={t(`projects.${refTranslation}.description`)} />
                </blockquote>
            </div>


        </a>
    );
}