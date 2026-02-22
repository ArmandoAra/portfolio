import { motion } from 'framer-motion'
import { SocialButton } from './Hero';
import { useTranslation } from 'react-i18next';
import { projectsNames, projectsPage } from '../../constants';

export default function Footer({ project }: { project: string }) {
    const { t } = useTranslation();

    return (
        <footer className="py-12 px-4 border-t border-slate-800">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-4">{projectsNames[project as keyof typeof projectsNames]}</h3>
                    <p className="text-gray-400 mb-6">
                        {t(`projects.${project}.footer.message`)}
                    </p>
                    <div className="flex justify-center gap-6 mb-8">
                        <SocialButton icon="💻" label="GitHub" link={projectsPage[project as keyof typeof projectsPage].link} />
                    </div>
                    <p className="text-gray-500 text-sm">
                        © 2026 {projectsNames[project as keyof typeof projectsNames]}. {t(`projects.${project}.footer.personal`)}.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

