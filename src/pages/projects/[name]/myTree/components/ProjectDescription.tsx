import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function ProjectDescription() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-10 px-4 md:px-8 max-w-6xl mx-auto ">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    {t('projects.my_Tree_Screen.projectDescription.title')}
                </h2>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        {t('projects.my_Tree_Screen.projectDescription.paragraph1')}
                    </p>
                    {/* Linew verde separadora */}
                    <div className="w-[90%] h-[1px] bg-green-500 rounded-full my-12 mx-auto "></div>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        {t('projects.my_Tree_Screen.projectDescription.paragraph2')}
                    </p>
                </div>
            </motion.div>
        </section>
    );
};