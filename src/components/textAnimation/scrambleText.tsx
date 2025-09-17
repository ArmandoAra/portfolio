import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

function randomChar() {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
}

type Props = {
    text: string;      // texto final
    duration?: number; // tiempo de animación en ms
};

export default function ScrambleText({ text, duration = 800 }: Props) {
    const { i18n } = useTranslation();
    const [display, setDisplay] = useState(text);
    const prevLang = useRef(i18n.language); // recordar idioma previo

    useEffect(() => {
        // Solo hacer scramble si el idioma cambió
        if (prevLang.current === i18n.language) {
            setDisplay(text);
            return;
        }

        prevLang.current = i18n.language;

        let frame = 0;
        const totalFrames = Math.floor(duration / 30);

        const interval = setInterval(() => {
            setDisplay((prev) =>
                prev
                    .split("")
                    .map((_, i) => {
                        if (i < (frame / totalFrames) * text.length) {
                            return text[i];
                        }
                        return randomChar();
                    })
                    .join("")
            );
            frame++;
            if (frame > totalFrames) {
                setDisplay(text);
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [text, i18n.language, duration]);

    return <span>{display}</span>;
}
