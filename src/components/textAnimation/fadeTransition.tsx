import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import './style.css';

type Props = {
    text: string;      // texto final
    duration?: number; // tiempo de animación en ms
    className?: string; // clases adicionales
};

export default function FadeText({ text, duration = 300, className }: Props) {
    const { i18n } = useTranslation();
    const [display, setDisplay] = useState(text);
    const [isVisible, setIsVisible] = useState(true);
    const prevLang = useRef(i18n.language); // recordar idioma previo

    useEffect(() => {
        // Solo hacer fade si el idioma cambió
        if (prevLang.current === i18n.language) {
            setDisplay(text);
            setIsVisible(true);
            return;
        }

        prevLang.current = i18n.language;

        // Fade out
        setIsVisible(false);

        // Después del fade out, cambiar el texto y hacer fade in
        const timeout = setTimeout(() => {
            setDisplay(text);
            setIsVisible(true);
        }, duration);

        return () => clearTimeout(timeout);
    }, [text, i18n.language, duration]);

    return (
        <span
            className={`fade-text ${className} ${isVisible ? 'fade-text--visible' : 'fade-text--hidden'}`}
        >
            {display}
        </span>
    );
}