import { motion} from 'framer-motion'
import { projectsNames, projectsPage } from "../../constants";

import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ProjectName } from './ProjectName';

export function SocialButton({ icon, label, link }: { icon: string; label: string; link: string }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-colors flex items-center gap-2"
        >
            <Link to={link} target="_blank" rel="noopener noreferrer">

                <span>{icon}</span>
                <span className="text-sm">{label}</span>
            </Link>
        </motion.button>
    );
}

export default function Hero({
    project,
     fromColor = "blue-400",
      toColor = "blue-800"
    }: { 
        project: string,
         fromColor?: string,
          toColor?: string
         }) {
    const { t } = useTranslation();
    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center  relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center z-10 flex flex-col items-center justify-center px-4 md:px-8 group"
            >
                <div className="w-72 h-72 mx-auto mb-8">
                    <img
                        src={projectsPage[project as keyof typeof projectsPage].icon}
                        width={300}
                        height={300}
                        alt={projectsNames[project as keyof typeof projectsNames] + " Background"}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <ProjectName text={projectsNames[project as keyof typeof projectsNames]} fromColor={fromColor} toColor={toColor} />
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    {t('projects.' + projectsPage[project as keyof typeof projectsPage].translate + '.heroSubtitle')}
                </p>
                <SocialButton
                    icon="💻"
                    label={t('projects.' + projectsPage[project as keyof typeof projectsPage].translate + '.gitHub')}
                    link={projectsPage[project as keyof typeof projectsPage].link}
                />
            </motion.div>

        </section>

    )

}