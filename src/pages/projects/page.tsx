import ProjectCard from "../../components/cards/ProjectCard";

// iconos
import typescript from "../../assets/logos/typescript.png";
import tailwind from "../../assets/logos/tailwind.png";
import astro from "../../assets/logos/astro.png";
import javascript from "../../assets/logos/js.png";
import react from "../../assets/logos/physics.png";

import duoCorazon from "../../assets/images/duoCorazon.webp";
import theLiazeed from "../../assets/images/the_liazeed_logo_white.png";
import { ProjectHeader } from "./header";
import { useMetadata } from "../../hooks/metadata/useMetadata";
import { useTranslation } from "react-i18next";


const projects = [
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


export default function Projects() {
    const { t } = useTranslation();

    // the hook
    useMetadata({
        title: t('projects.metatitle'),
        description: t('projects.metadescription')
    });


    return (
        <div className="fles flex-col overflow-scroll">
            <div className="w-full texture bg-gray-900 "></div>
            <section className="py-16  mr-[70px]">
                <div className="container mx-auto">

                    <ProjectHeader />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                        {
                            projects.map((project, index) => (
                                <ProjectCard key={index}
                                    {...project}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}




