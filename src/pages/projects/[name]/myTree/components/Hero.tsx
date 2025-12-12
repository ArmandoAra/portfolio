import { motion, useScroll, useTransform } from 'framer-motion'
import myTree from "../../../../../assets/images/projects/mytree/over_background.png"
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export function SocialButton({ icon, label }: { icon: string; label: string }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-colors flex items-center gap-2"
        >
            <Link to="https://github.com/ArmandoAra/my-tree" target="_blank" rel="noopener noreferrer">

                <span>{icon}</span>
                <span className="text-sm">{label}</span>
            </Link>
        </motion.button>
    );
}

export default function Hero() {
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    return (
        <>
            <motion.section
                style={{ opacity }}
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
                            src={myTree}
                            width={300}
                            height={300}
                            alt="FamilyTree Background"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-slate-400 to-green-800 bg-clip-text text-transparent">
                        FamilyTree
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('projects.my_Tree_Screen.heroSubtitle')}
                    </p>
                    <SocialButton icon="💻" label={t('projects.my_Tree_Screen.gitHub')} />
                </motion.div>

            </motion.section>
        </>

    )

}