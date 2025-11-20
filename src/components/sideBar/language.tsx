import { useAppSelector, useAppDispatch } from "../../store";

import ptImage from "../../assets/languages/pt.png";
import esImage from "../../assets/languages/es.png";
import enImage from "../../assets/languages/en.png";
import { setLanguage } from "../../store/language/langSlice";

import type { Language } from "../../store/language/langSlice";
import { useEffect, useState } from 'react';
import i18n from "i18next";

const languages = [
    { title: "pt", imageSrc: ptImage },
    { title: "es", imageSrc: esImage },
    { title: "en", imageSrc: enImage },
];



export default function LanguageSelector({ state }: { state: boolean }) {
    const lang = useAppSelector(state => state.language.lang);
    const [langActive, setLangActive] = useState<string>('');

    useEffect(() => {
        setLangActive(lang);
        setLanguage(lang)
        i18n.changeLanguage(lang);
    }, [lang]);

    return (
        <div className="flex flex-col  mb-10 relative bottom-0 w-full">
            {languages.map((lang) => (
                <Language
                    key={lang.title}
                    state={state}
                    title={lang.title}
                    langActive={langActive === lang.title}
                    setLangActive={setLangActive}
                    imageSrc={lang.imageSrc} />
            )
            )}
        </div>
    );
}

interface LanguageProps {
    state: boolean;
    title: string;
    imageSrc: string;
    langActive: boolean;
    setLangActive: (langActive: string) => void;
}

function Language({
    state,
    title,
    imageSrc,
    langActive,
    setLangActive
}: LanguageProps) {
    const dispatch = useAppDispatch();

    const handleLanguageChange = (title: Language) => {
        dispatch(setLanguage(title));
        setLangActive(title);
    };

    return (
        <div onClick={() => handleLanguageChange(title as Language)} className={`flex justify-center items-center transition-all gap-2
                                 duration-300 ease-in-out relative cursor-pointer
                                hover:bg-slate-900/65 w-full h-10
                                 ${(langActive)
                ? 'before:content-[""] before:absolute before:right-0 before:h-full before:w-1 before:bg-orange-400 before:rounded-l-lg before:shadow-[-10px_0_30px_10px_rgba(230,200,225,0.6)]'
                : ''
            }
                                `}>
            <img src={imageSrc} alt={title} className="w-9 h-6 rounded-xl" width={26} height={26} />
            {state && <span className="text-slate-800 ">{title}</span>}
        </div>
    );
}