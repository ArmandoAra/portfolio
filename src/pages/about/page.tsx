
import { useTranslation } from "react-i18next";
import { useMetadata } from "../../hooks/metadata/useMetadata";
import { AboutCard } from "../../components/cards/AboutCard";
import platziCourse from "../../assets/images/degrees/Platzi.webp";
import metaFrontend from "../../assets/images/degrees/Coursera.webp";
import udemyCourse from "../../assets/images/degrees/Udemy.webp";
import ScrambleText from "../../components/textAnimation/scrambleText";

import { motion } from "framer-motion";

export default function About() {
    const { t } = useTranslation();

    useMetadata({
        title: t('aboutMe.metatitle'),
        description: t('aboutMe.metadescription')
    });

    return (
        <motion.section
            className="relative min-h-screen flex flex-col w-full bg-slate-900 items-center px-4 md:px-16 pt-10 overflow-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <motion.article
                className="text-center mb-2 md:mb-12 w-full md:w-2/3 lg:w-1/2 mr-[70px] p-8 border-b-2 border-slate-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl font-bold mb-4 text-slate-200">{(t('aboutMe.title'))}</h1>
                <p className="text-lg text-slate-200 p-4">
                    <ScrambleText text={t('aboutMe.description')} />
                </p>
            </motion.article>

            <motion.div
                className="flex flex-col items-center  w-full mr-[70px] p-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}

            >

                <AboutCard
                    image={platziCourse}
                    description={t('aboutMe.certifications.platzi')}
                    position={"right"}
                />

                <AboutCard
                    image={metaFrontend}
                    description={t('aboutMe.certifications.metaFrontend')}
                    position={"left"}
                />

                <AboutCard
                    image={udemyCourse}
                    description={t('aboutMe.certifications.udemy')}
                    position={"right"}
                />

            </motion.div>
        </motion.section>
    );
}

