import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { projectsPage } from "../../constants";
import { FeatureCard } from "./FeatureCard";





export default function FeaturesShowcase({ project }: { project: string }) {
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
                    {t(`projects.${project}.features.title`)}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsPage[project as keyof typeof projectsPage].features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
