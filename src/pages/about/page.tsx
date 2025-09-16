
import { useTranslation } from "react-i18next";
import { useMetadata } from "../../hooks/metadata/useMetadata";
import { AboutCard } from "../../components/cards/AboutCard";
import platziCourse from "../../assets/degrees/Platzi.png";
import metaFrontend from "../../assets/degrees/Coursera.png";
import udemyCourse from "../../assets/degrees/Udemy.png";


export default function About() {
    const { t } = useTranslation();

    useMetadata({
        title: t('aboutMe.metatitle'),
        description: t('aboutMe.metadescription')
    });

    return (
        <section className="relative min-h-screen flex flex-col w-full bg-slate-900 items-center px-4 md:px-16 pt-10 overflow-scroll">
            <div className="text-center mb-2 md:mb-12 w-full md:w-2/3 lg:w-1/2 mr-[70px] p-8 border-b-2 border-slate-200">
                <h1 className="text-3xl font-bold mb-4 text-slate-200">{(t('aboutMe.title'))}</h1>
                <p className="text-lg text-slate-200 p-4">{(t('aboutMe.description'))}</p>
            </div>

            <div className="flex flex-col items-center  w-full mr-[70px] p-8">

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

            </div>
        </section>
    );
}

