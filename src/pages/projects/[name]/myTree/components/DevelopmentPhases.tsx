import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';

import IdeacionImage from '../../../../../assets/projects/myTree/Ideation.webp';
import BrainstormingImage from '../../../../../assets/projects/myTree/BrainStortming.webp';
import MaquetacionImage from '../../../../../assets/projects/myTree/Maketacion.webp';
import PrototipoImage from '../../../../../assets/projects/myTree/Prototiping.webp';
import DesarrolloImage from '../../../../../assets/projects/myTree/coding.webp';
import { useTranslation } from 'react-i18next';

const techs = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Flow', 'Vite', 'Zustand', 'Figma', 'Cloudinary', 'Prisma', 'Docker', 'Y otras...'];
interface PhaseShowcase {
    translateReference: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    imageUrl: string;
}

function TechnologiesUsed() {
    const { t } = useTranslation();
    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">{t("projects.my_Tree_Screen.developmentProcess.technologies")}</h2>
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
                {techs.map((tech, i) => (
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

const PhaseCard = ({ phase, index }: { phase: PhaseShowcase; index: number }) => {
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
            <h3 className="text-xl font-bold mb-3">{t(`projects.my_Tree_Screen.developmentProcess.${phase.translateReference}.title`)}</h3>
            <p className="text-gray-400 leading-relaxed ">{t(`projects.my_Tree_Screen.developmentProcess.${phase.translateReference}.text`)}</p>
            <img
                src={phase.imageUrl}
                alt={phase.title}
                className="mt-4 rounded-lg shadow-lg w-full object-cover h-48"
            />
        </motion.div>
    );
};

export default function DevelopmentProcess() {
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
                    {t("projects.my_Tree_Screen.developmentProcess.title")}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {phases.map((phase, index) => (
                        <PhaseCard key={index} phase={phase} index={index} />
                    ))}
                </div>
            </div>
            <TechnologiesUsed />
        </section>
    );
};

