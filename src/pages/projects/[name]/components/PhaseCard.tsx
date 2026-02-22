import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import type { PhaseShowcase } from "../../constants";

export const PhaseCard = ({ phase, index, project }: { phase: PhaseShowcase; index: number; project: string }) => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col justify-around bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-xl hover:shadow-purple-500/10"
        >
            <div className={`text-5xl mb-4 bg-gradient-to-r ${phase.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                {phase.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{t(`projects.${project}.developmentProcess.${phase.translateReference}.title`)}</h3>
            <p className="text-gray-400 leading-relaxed ">{t(`projects.${project}.developmentProcess.${phase.translateReference}.text`)}</p>
            <img
                src={phase.imageUrl}
                alt={phase.title}
                className="mt-4 rounded-lg shadow-lg w-full object-cover h-48"
            />
        </motion.div>
    );
};