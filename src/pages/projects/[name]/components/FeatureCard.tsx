import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import ResponsiveCarousel from "./ProjectImagesCarousel";
import type { FeaturesShowcase } from "../../constants";

export function FeatureCard({ feature, index, project }: { feature: FeaturesShowcase; index: number; project: string }) {
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

            <img className={`text-6xl mb-4 bg-gradient-to-r ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg`} src={feature.image} alt={feature.translationRef} />

            <h3 className="text-2xl font-bold mb-4">{t(`projects.${project}.features.${feature.translationRef}.title`)}</h3>
            <p className="text-gray-400 leading-relaxed">{t(`projects.${project}.features.${feature.translationRef}.text`)}</p>

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
