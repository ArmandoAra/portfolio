import { CtaButton } from '../../components/buttons/ctaButton';

// the hook
import { useTranslation } from 'react-i18next';
import AnimatedBackground from "../../pages/home/AnimatedBackground";
import { ProfileImageContainer } from "../../pages/home/ProfileImageContainer";
import { useMetadata } from '../../hooks/metadata/useMetadata';

export default function MainPage() {
    const { t } = useTranslation();

    useMetadata({
        title: t('home.metatitle'),
        description: t('home.metadescription')
    });

    return (
        <div className='w-screen h-screen'>
            {/* Contenedor principal */}
            <div className=" relative pt-16  lg:pt-44 pr-[80px] w-full overflow-hidden h-full">
                <AnimatedBackground />
                <div className="relative flex flex-col  xl:container m-auto px-6 md:px-12 lg:px-6 top-0 lg:top-48 ">
                    <h1 className=" sm:w-10/12 md:w-2/3 font-black   text-4xl text-center mx-auto lg:m-0 md:text-left sm:text-5xl md:text-6xl lg:w-auto  xl:text-7xl text-orange-300 leading-tight ">
                        {t('home.greetings')}
                        <br className="lg:block h-1 w-full" />
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">{t('home.profesion')}</span>.</h1>
                    <div className="lg:flex">
                        <div className="relative mt-8 md:mt-10 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                            <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                                {t('home.description')}
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
                    </div>
                </div>

                <ProfileImageContainer />
            </div>
        </div>
    );
}

