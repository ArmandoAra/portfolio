// iconos
import typescript from "../../assets/logos/typescript.png";
import tailwind from "../../assets/logos/tailwind.png";
import astro from "../../assets/logos/astro.png";
import javascript from "../../assets/logos/js.png";
import react from "../../assets/logos/physics.png";
import nextjs from "../../assets/logos/nextjs.png";
import postgress from "../../assets/logos/postgres.webp";
import prisma from "../../assets/logos/prisma.png";
import docker from "../../assets/logos/docker.png";

import duoCorazon from "../../assets/images/duoCorazon.webp";
import theLiazeed from "../../assets/images/the_liazeed_logo_white.png";
import tesloImg from "../../assets/images/projects/teslo/1657891-00-A_1.jpg";
import myTree from "../../assets/images/projects/mytree/over_background.png"

export const projects = [
    {
        refTranslation: "my_Tree",
        title: "Aplicacion Web My Tree",
        link: "/projects/my-tree",
        tech: [nextjs, typescript, tailwind, react, postgress, prisma, docker],
        bgImage: myTree,
        outside: false
    },
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
    {
        refTranslation: "teslo_shop",
        title: "Teslo Shop",
        link: "https://github.com/ArmandoAra/teslo-shop",
        tech: [typescript, react, tailwind, nextjs],
        bgImage: tesloImg,
        outside: true
    },
];
