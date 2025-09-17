// iconos
import typescript from "../../assets/logos/typescript.png";
import tailwind from "../../assets/logos/tailwind.png";
import astro from "../../assets/logos/astro.png";
import javascript from "../../assets/logos/js.png";
import react from "../../assets/logos/physics.png";

import duoCorazon from "../../assets/images/duoCorazon.webp";
import theLiazeed from "../../assets/images/the_liazeed_logo_white.png";

export const projects = [
    {
        refTranslation: "web_duo",
        title: "Web de Presentacion Circense",
        link: "https://www.duocorazon.com/",
        tech: [astro, javascript, react, tailwind],
        bgImage: duoCorazon,
        outside: true
    },
    {
        refTranslation: "web_theliazeed",
        title: "The Liazeed Entertainment Company",
        link: "https://theliazeed.de/",
        tech: [typescript, react, tailwind],
        bgImage: theLiazeed,
        outside: true
    },
    // {
    //     refTranslation: "todo_project",
    //     title: "Mi Proyecto de Todo",
    //     link: "/projects/todos",
    //     tech: [nextjs, tailwind],
    //     bgImage: null,
    //     outside: false
    // },
    // {
    //     refTranslation: "enem_quizz",
    //     title: "Enem Quizz",
    //     link: "/projects/enem",
    //     tech: [nextjs, tailwind],
    //     bgImage: null,
    //     outside: false
    // },
    // {
    //     refTranslation: "pokemon",
    //     title: "Obteniendo datos de Pokémon",
    //     link: "/projects/pokemons",
    //     tech: [nextjs, tailwind, typescript],
    //     bgImage: pokemons,
    //     outside: false
    // },
];
