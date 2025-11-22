import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Imagenes para Login y Register
import imageLoginMobile from "../../../../../assets/projects/myTree/LoginMobile.webp";
import imageRegisterMobile from "../../../../../assets/projects/myTree/RegisterMobile.webp";
import imageDesktop from "../../../../../assets/projects/myTree/LoginDesktop.webp";

// Imagenes para  Home con y sin usuario
import imageHomeNoUserMobile from "../../../../../assets/projects/myTree/HomeMobile.webp";
import imageHomeWithUserMobile from "../../../../../assets/projects/myTree/HomeMobileWithUser.webp";
import imageHomeNoUserDesktop from "../../../../../assets/projects/myTree/HomeDesktop.webp";
import imageHomeWithUserDesktop from "../../../../../assets/projects/myTree/HomeDesktopWithUser.webp";



// Imagenes para Visualización Automática
import imageFamilyScreenEmptyMobile from "../../../../../assets/projects/myTree/FamilyScreenEmptyMobile.webp";
import imageFamilyScreenEmptyDesktop from "../../../../../assets/projects/myTree/FamilyScreenEmptyDesktop.webp";
import imageAutoViewMobile from "../../../../../assets/projects/myTree/FamilyScreenGridViewMobile.webp";
import imageAutoViewDesktop from "../../../../../assets/projects/myTree/FamilyScreenGridViewDesktop.webp";

// Imagenes para Vista de Nodos
import imageNodeViewMobile from "../../../../../assets/projects/myTree/FamilyScreenNodeViewMobile.webp";
import imageNodeViewDesktop from "../../../../../assets/projects/myTree/FamilyScreenNodeViewDesktop.webp";

// Imagenes para Gestión de Familia
import imageFamilyManagementMobile from "../../../../../assets/projects/myTree/CreateFamilyConnectionMobile.webp";
import imageFamilyManagementDesktop from "../../../../../assets/projects/myTree/CreateFamilyConnectionDesktop.webp";

import ResponsiveCarousel from "./ProjectImagesCarousel";
import { useTranslation } from "react-i18next";



interface FeatureImages {
    device: string[];
    images: string[];
}

interface FeaturesShowcase {
    translationRef: string;
    title: string;
    description: string;
    image: string;
    gradient: string;
    images?: FeatureImages[];
}

const features: FeaturesShowcase[] = [
    {
        translationRef: "login",
        title: "title",
        description: "text",
        image: "🔐",
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
        image: "🏠",
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
        image: "👨‍👩‍👧‍👦",
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
        image: "🔄",
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
        image: "🌳",
        gradient: "from-indigo-500 to-purple-500",
        images: [
            { device: ["Node View (Mobile)"], images: [imageNodeViewMobile] },
            { device: ["Node View (Desktop)"], images: [imageNodeViewDesktop] }
        ]
    }

];

function FeatureCard({ feature, index }: { feature: FeaturesShowcase; index: number }) {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 overflow-hidden"
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

            <div className={`text-6xl mb-4 bg-gradient-to-r ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg`}>
                {feature.image}
            </div>

            <h3 className="text-2xl font-bold mb-4">{t(`projects.my_Tree_Screen.features.${feature.translationRef}.title`)}</h3>
            <p className="text-gray-400 leading-relaxed">{t(`projects.my_Tree_Screen.features.${feature.translationRef}.text`)}</p>

            <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6`}
            />
            {
                feature.images && <div className="mt-8">
                    <ResponsiveCarousel images={feature.images} />
                </div>
            }

        </motion.div>
    );
};


export default function FeaturesShowcase() {
    const { t } = useTranslation();
    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                    {t("projects.my_Tree_Screen.features.title")}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
