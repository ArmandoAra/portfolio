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
import spendiary from "../../assets/projects/spendiary/spendiary_icon.png";

import IdeacionImage from '../../assets/projects/Ideation.webp';
import BrainstormingImage from '../../assets/projects/BrainStortming.webp';
import MaquetacionImage from '../../assets/projects/Maketacion.webp';
import PrototipoImage from '../../assets/projects/Prototiping.webp';
import DesarrolloImage from '../../assets/projects/coding.webp';

// iconos para My Tree
import logingMyTree from "../../assets/projects/myTree/icons/login.png";
import homeMyTree from "../../assets/projects/myTree/icons/home.png";
import familyManagementMyTree from "../../assets/projects/myTree/icons/family.png";
import autoViewMyTree from "../../assets/projects/myTree/icons/nodes.png";
import developmentMyTree from "../../assets/projects/myTree/icons/visual.png";

// Imagenes para Login y Register
import imageLoginMobile from "../../assets/projects/myTree/LoginMobile.webp";
import imageRegisterMobile from "../../assets/projects/myTree/RegisterMobile.webp";
import imageDesktop from "../../assets/projects/myTree/LoginDesktop.webp";

// Imagenes para  Home con y sin usuario
import imageHomeNoUserMobile from "../../assets/projects/myTree/HomeMobile.webp";
import imageHomeWithUserMobile from "../../assets/projects/myTree/HomeMobileWithUser.webp";
import imageHomeNoUserDesktop from "../../assets/projects/myTree/HomeDesktop.webp";
import imageHomeWithUserDesktop from "../../assets/projects/myTree/HomeDesktopWithUser.webp";



// Imagenes para Visualización Automática
import imageFamilyScreenEmptyMobile from "../../assets/projects/myTree/FamilyScreenEmptyMobile.webp";
import imageFamilyScreenEmptyDesktop from "../../assets/projects/myTree/FamilyScreenEmptyDesktop.webp";
import imageAutoViewMobile from "../../assets/projects/myTree/FamilyScreenGridViewMobile.webp";
import imageAutoViewDesktop from "../../assets/projects/myTree/FamilyScreenGridViewDesktop.webp";

// Imagenes para Vista de Nodos
import imageNodeViewMobile from "../../assets/projects/myTree/FamilyScreenNodeViewMobile.webp";
import imageNodeViewDesktop from "../../assets/projects/myTree/FamilyScreenNodeViewDesktop.webp";

// Imagenes para Gestión de Familia
import imageFamilyManagementMobile from "../../assets/projects/myTree/CreateFamilyConnectionMobile.webp";
import imageFamilyManagementDesktop from "../../assets/projects/myTree/CreateFamilyConnectionDesktop.webp";

// Imagenes para Spendiary
import securityImage from "../../assets/projects/spendiary/seguridad.webp";
import transactionsImage from "../../assets/projects/spendiary/salario.webp";
import analyticsImage from "../../assets/projects/spendiary/chart.webp";
import budgetsImage from "../../assets/projects/spendiary/lista.webp";
import portabilityImage from "../../assets/projects/spendiary/arte.webp";

import loginImage from "../../assets/projects/spendiary/pictures/1.png";
import transactions from "../../assets/projects/spendiary/pictures/2.png";
import chart1 from "../../assets/projects/spendiary/pictures/3.png";
import chart2 from "../../assets/projects/spendiary/pictures/4.png";
import heatmap1 from "../../assets/projects/spendiary/pictures/5.png";
import heatmap2 from "../../assets/projects/spendiary/pictures/6.png";
import customBudget from "../../assets/projects/spendiary/pictures/7.png";
import settings1 from "../../assets/projects/spendiary/pictures/8.png";
import settings2 from "../../assets/projects/spendiary/pictures/9.png";
import settings3 from "../../assets/projects/spendiary/pictures/10.png";

export const projectsNames = {
    spendiary: "Spendiary",
    my_Tree: "My Tree",
    web_duo: "Duo Corazon",
    web_theliazeed: "The Liazeed Entertainment Company",
    teslo_shop: "Teslo Shop"
}
export const projects = [
    {
        refTranslation: "spendiary",
        title: "Spendiary - App Android de Finanzas Personales",
        link: "/projects/spendiary", //Cambiar a la ruta del proyecto en la play store cuando esté disponible
        tech: [typescript, react, tailwind, nextjs],
        bgImage: spendiary,
        outside: false
    },
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

export interface PhaseShowcase {
    translateReference: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    imageUrl: string;
}

const phases: PhaseShowcase[] = [
    {
        translateReference: "ideacion",
        title: "title",
        description: "text",
        icon: "💡",
        color: "from-yellow-400 to-orange-500",
        imageUrl: IdeacionImage
    },
    {
        translateReference: "brainstorming",
        title: "title",
        description: "text",
        icon: "🧠",
        color: "from-purple-400 to-pink-500",
        imageUrl: BrainstormingImage
    },
    {
        translateReference: "maquetacion",
        title: "title",
        description: "text",
        icon: "📐",
        color: "from-blue-400 to-cyan-500",
        imageUrl: MaquetacionImage
    },
    {
        translateReference: "prototiping",
        title: "title",
        description: "text",
        icon: "🎨",
        color: "from-green-400 to-teal-500"
        , imageUrl: PrototipoImage
    },
    {
        translateReference: "development",
        title: "title",
        description: "text",
        icon: "⚙️",
        color: "from-indigo-400 to-purple-500",
        imageUrl: DesarrolloImage
    },
];
const MyTreeTechs = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Flow', 'Vite', 'Zustand', 'Figma', 'Cloudinary', 'Prisma', 'Docker', 'Y otras...'];
const SpendiaryTechs = ['React Native', 'TypeScript', 'Zustand', 'React Navigation', 'Expo'];

interface FeatureImages {
    device: string[];
    images: string[];
}

export interface FeaturesShowcase {
    translationRef: string;
    title: string;
    description: string;
    image: string;
    gradient: string;
    images?: FeatureImages[];
}

const spendiaryFeatures: FeaturesShowcase[] = [
    {
        translationRef: "security",
        title: "title",
        description: "text",
        image: securityImage,
        gradient: "from-blue-500 to-cyan-500",
        images: [
            { device: ["Login"], images: [loginImage] },
        ]
    },
    {
        translationRef: "transactions",
        title: "title",
        description: "text",
        image: transactionsImage,
        gradient: "from-purple-500 to-pink-500",
        images: [
            { device: ["Transactions"], images: [transactions] },
        ]
    },
    {
        translationRef: "analytics",
        title: "title",
        description: "text",
        image: analyticsImage,
        gradient: "from-pink-500 to-rose-500",
        images: [
            { device: ["chart1", "chart2", "heatmap1", "heatmap2"], images: [chart1, chart2, heatmap1, heatmap2] },
        ]
    },
    {
        translationRef: "budgets",
        title: "title",
        description: "text",
        image: budgetsImage,
        gradient: "from-orange-500 to-red-500",
        images: [
            { device: ["budgets"], images: [customBudget] },
        ]
    },
    {
        translationRef: "portability_and_appearance",
        title: "title",
        description: "text",
        image: portabilityImage,
        gradient: "from-indigo-500 to-purple-500",
        images: [
            { device: ["settings1", "settings2", "settings3"], images: [settings1, settings2, settings3] },
        ]
    }

];

const mytreeFeatures: FeaturesShowcase[] = [
    {
        translationRef: "login",
        title: "title",
        description: "text",
        image: logingMyTree,
        gradient: "from-blue-500 to-cyan-500",
        images: [
            { device: ["Login (Mobile)", "Register (Mobile)"], images: [imageLoginMobile, imageRegisterMobile] },
            { device: ["Login (Desktop)"], images: [imageDesktop] }
        ]
    },
    {
        translationRef: "home",
        title: "title",
        description: "text",
        image: homeMyTree,
        gradient: "from-purple-500 to-pink-500",
        images: [
            { device: ["Home No User (Mobile)", "Home With User (Mobile)"], images: [imageHomeNoUserMobile, imageHomeWithUserMobile] },
            { device: ["Home No User (Desktop)", "Home With User (Desktop)"], images: [imageHomeNoUserDesktop, imageHomeWithUserDesktop] }
        ]
    },
    {
        translationRef: "familyManagement",
        title: "title",
        description: "text",
        image: familyManagementMyTree,
        gradient: "from-pink-500 to-rose-500",
        images: [
            { device: ["Family Screen Empty (Mobile)", "Family Management (Mobile)"], images: [imageFamilyScreenEmptyMobile, imageFamilyManagementMobile] },
            { device: ["Family Screen Empty (Desktop)", "Family Management (Desktop)"], images: [imageFamilyScreenEmptyDesktop, imageFamilyManagementDesktop] }
        ]
    },
    {
        translationRef: "autoView",
        title: "title",
        description: "text",
        image: autoViewMyTree,
        gradient: "from-orange-500 to-red-500",
        images: [
            { device: ["Auto View (Mobile)"], images: [imageAutoViewMobile] },
            { device: ["Auto View (Desktop)"], images: [imageAutoViewDesktop] }
        ]
    },
    {
        translationRef: "development",
        title: "title",
        description: "text",
        image: developmentMyTree,
        gradient: "from-indigo-500 to-purple-500",
        images: [
            { device: ["Node View (Mobile)"], images: [imageNodeViewMobile] },
            { device: ["Node View (Desktop)"], images: [imageNodeViewDesktop] }
        ]
    }

];

export const projectsPage = {
    spendiary: {
        translate: "spendiary",
        icon: spendiary,
        link: "https://github.com/ArmandoAra/gastos-mobile",
        phases,
        techs: SpendiaryTechs,
        features: spendiaryFeatures
    },
    my_Tree: {
        translate: "my_Tree",
        icon: myTree,
        link: "https://github.com/ArmandoAra/my-tree",
        phases,
        techs: MyTreeTechs,
        features: mytreeFeatures
    },
}


