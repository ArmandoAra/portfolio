import ProjectCard from "../../components/cards/ProjectCard";


import { useMetadata } from "../../hooks/metadata/useMetadata";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScrambleText from "../../components/textAnimation/scrambleText";
import { projects } from "./constants";

export default function Projects() {
    const { t } = useTranslation();

    // the hook
    useMetadata({
        title: t('projects.metatitle'),
        description: t('projects.metadescription')
    });
    return (
        <motion.div
            className="fles flex-col overflow-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="w-full texture bg-gray-900 "></div>
            <section className="py-16  mr-[70px]">
                <div className="container mx-auto">
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-6 max-w-lg relative left-10">
                            <h2 className="font-sans antialiased font-light text-3xl md:text-4xl lg:text-4xl text-stone-100 mb-4 [text-wrap:_balance]">{t("projects.title")}</h2>
                            <h3 className="font-sans antialiased font-bold  text-xl w-4/5 md:w-full md:text-2xl text-stone-200 [text-wrap:_balance]">
                                <ScrambleText text={t("projects.description")} />
                            </h3>
                        </div>
                    </motion.article>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {
                            projects.map((project, index) => (
                                <ProjectCard key={index}
                                    {...project}
                                />
                            ))
                        }
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}




