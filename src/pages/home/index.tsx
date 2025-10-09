import { CtaButton } from '../../components/buttons/ctaButton';

// the hook
import { useTranslation } from 'react-i18next';
import AnimatedBackground from "../../pages/home/AnimatedBackground";
import profileImage from "../../assets/images/profile/Profile.png"

import { useMetadata } from '../../hooks/metadata/useMetadata';

import { motion } from 'framer-motion';
import FadeText from '../../components/textAnimation/fadeTransition';
import FloatingIcons from './floatingIcons/floatingIcons';

export default function MainPage() {
    const { t } = useTranslation();

    useMetadata({
        title: t('home.metatitle'),
        description: t('home.metadescription')
    });

    return (
        <motion.section
            className=" pt-16  lg:pt-44 pr-[80px] w-full overflow-y-auto "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >

            <AnimatedBackground />
            <FloatingIcons />
            <div className="relative flex flex-col  xl:container m-auto px-6 md:px-12 lg:px-6 top-0 lg:top-16">
                <motion.h1
                    className=" sm:w-10/12 md:w-2/3 font-black   text-4xl text-center mx-auto lg:m-0 md:text-left sm:text-5xl md:text-6xl lg:w-auto  xl:text-7xl  leading-tight "
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Aqui me quedeee */}
                    <FadeText text={t('home.greetings')} className="text-slate-100 myname" />
                    <br className="lg:block h-1 w-full" />
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                        <FadeText text={t('home.profesion')} />
                    </span>.</motion.h1>
                <motion.div className="lg:flex"
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <div className="relative mt-8 md:mt-10 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                        <p className="sm:text-lg text-slate-100 lg:w-11/12">
                            <FadeText text={t('home.description')} />
                        </p>
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-2  h-24 lg:justify-items-start  lg:gap-0">
                            <CtaButton
                                funcion={() => { }}
                                titulo={t('buttons.projects')}
                                bgcolor="bg-slate-900 text-slate-250"
                                url="/projects"
                            />
                            <CtaButton
                                funcion={() => { }}
                                titulo={t('buttons.contactMe')}
                                bgcolor="bg-blue-500 text-slate-750"
                                url="mailto:armandoaranopla@gmail.com"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="mt-12 md:mt-0 relative h-[30vh] lg:h-auto lg:absolute -right-0 lg:w-1/2 bottom-0  "
                // viene desde la derecha
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="h-full">
                    <div aria-hidden="true" className=""></div>
                    <div>
                        <img
                            src={profileImage}
                            alt="Profile image"
                            className="h-full object-cover lg:object-contain  mx-auto"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </motion.div>


        </motion.section>
    );
}

