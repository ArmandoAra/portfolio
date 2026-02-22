import { motion } from 'framer-motion'
import { projectsPage } from '../../constants';
import { PhaseCard } from './PhaseCard';

import { useTranslation } from 'react-i18next';


function TechnologiesUsed({project}: {project: string}) {
    const { t } = useTranslation();
    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">{t(`projects.${project}.developmentProcess.technologies`)}</h2>
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
                {projectsPage[project as keyof typeof projectsPage].techs.map((tech, i) => (
                    <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-4 py-2 bg-green-100 text-green-800 rounded-full"
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>
        </section>
    )
}

export default function DevelopmentProcess({ project }: { project: string }) {
    const { t } = useTranslation();


    return (
        <section className="py-20 px-4 md:px-8 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                     {t(`projects.${project}.developmentProcess.title`)}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsPage[project as keyof typeof projectsPage].phases.map((phase, index) => (
                        <PhaseCard key={index} phase={phase} index={index} project={project}/>
                    ))}
                </div>
            </div>
            <TechnologiesUsed project={project} />
        </section>
    );
};

